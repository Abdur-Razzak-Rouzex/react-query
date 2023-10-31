import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const getCourseByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => getUserByEmail(email));
  const channelId = user?.data?.channelId;

  useQuery(["courses", channelId], () => getCourseByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
