import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const ParallelQueriesPage = () => {
  const getSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const getFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

  const { data: superheroes } = useQuery("super-heroes", getSuperHeroes);
  const { data: friends } = useQuery("Friends", getFriends);

  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
