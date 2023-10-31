import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const getColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data } = useQuery(
    ["colors", pageNumber],
    () => getColors(pageNumber),
    {
      // keepPreviousData: true
      // use the above option to keep the previously loaded data until the request sent is successfully responsed
    }
  );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber == 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber == 4}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default PaginatedQueriesPage;
