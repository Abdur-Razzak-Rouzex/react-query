import axios from "axios";
import { useQuery } from "react-query";

const getSuperHero = ({ queryKey }) => {
  console.log("query key: ", queryKey);
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-heroes", heroId], getSuperHero);
};
