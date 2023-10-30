import axios from "axios";
import { useQuery } from "react-query";

const getSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = () => {
  return useQuery("super-heroes", getSuperHeroes, {
    // staleTime: 30000
    refetchOnWindowFocus: false,
    //   refetchInterval: 2000
    //   onSuccess: onSuccessMethod,
    //   onError: onErrorMethod,
    /*       select: (data) => {
            // Here you can modify the data you received from the API call
            const superHeroesNames = data?.data?.map((hero) => hero.name);
            return superHeroesNames;
          }, */
  });
};
