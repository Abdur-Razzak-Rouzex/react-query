import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { useQuery, useQueryClient } from "react-query";
import { getSuperHero } from "../hooks/useSuperHeroData";

const RQSuperHeroesPage = () => {
  const queryClient = useQueryClient();
  const { isLoading, data, isError, error } = useSuperHeroesData();

  // for calling an API based on user events eg. click
  /*   const { isLoading, data, isError, error, refetch } = useQuery(
    "super-heroes",
    getSuperHeroes,
    {
        enabled: false
    }
  ); */

  const prefetchData = () => {
    queryClient.prefetchQuery(["super-heroes", 1], getSuperHero, {
      staleTime: 5000,
    });
  };

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
        return (
          <div key={hero?.id}>
            <Link
              to={`/rq-super-heroes/${hero?.id}`}
              onMouseEnter={prefetchData}
            >
              {hero?.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default RQSuperHeroesPage;
