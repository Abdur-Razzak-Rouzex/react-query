import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const getSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-heroes", heroId], getSuperHero);

  /* for setting the initial Query Data */
  const queryClient = useQueryClient();
  return useQuery(["super-heroes", heroId], getSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueriesData("super-heroes")
        ?.data?.find((hero) => hero.id == parseInt(heroId));

      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
