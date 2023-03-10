import axios from "axios";
import { useQuery } from "react-query";
import EndPoints from "./EndPoints";
import { useState } from "react";

export function useApi<Res = unknown>(endPoint: EndPoints, mutable = false) {
  const [params, setParams] = useState<Record<string, unknown>>();

  const query = useQuery(
    [endPoint, mutable ? params : null],
    () => {
      return axios.post(endPoint, params).then(function (response) {
        return response.data as Res;
      });
    },
    {
      enabled: mutable ? params != null : true,
    }
  );

  return { setParams, query };
}
