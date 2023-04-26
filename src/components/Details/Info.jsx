import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/endpoints";
import Titlle from "./Titlle";
import Description from "./Description";
import SimilarInterface from "../Similar-Interface/SimilarInterface";

const Info = ({ id, type, apiKey }) => {
  const { data, isLoading, isError } = useQuery(["details", id], () =>
    api.fetchDetails(apiKey, type, id)
  );

  if (isLoading) return "";
  if (isError) return "";

  const information = data.data;

  return (
    <div className="w-full">
      <Titlle information={information} type={type} />
      <Description information={information} type={type} id={id} />
      <SimilarInterface
        apiKey={apiKey}
        queryTitle={`similar-${type}-${id}`}
        title={"Similar Shows :"}
        queryFn={api.fetchSimilar}
        path={"/"}
        type={type}
        id={id}
      />
    </div>
  );
};

export default Info;
