import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    getSuperHeroes,
    {
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
    }
  );

  // for calling an API based on user events eg. click
  /*   const { isLoading, data, isError, error, refetch } = useQuery(
    "super-heroes",
    getSuperHeroes,
    {
        enabled: false
    }
  ); */

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super heroes page</h2>
      {/* <button onClick={refetch}>Click to fetch data</button> */}
      {data?.data?.map((hero) => {
        return <div key={hero?.name}>{hero?.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
