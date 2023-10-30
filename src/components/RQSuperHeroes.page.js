import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useSuperHeroesData();

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
