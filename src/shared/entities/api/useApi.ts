import axios from "axios";
import { useQuery } from "react-query";
import EndPoints from "./EndPoints";
import { useState } from "react";

export function useApi<ParsedRes = unknown, Res = unknown>({
  endPoint,
  mutable = false,
  parser,
}: {
  endPoint: EndPoints;
  mutable?: boolean;
  parser?: (rawData: Res) => ParsedRes;
}) {
  const [params, setParams] = useState<Record<string, unknown>>();

  const query = useQuery(
    [endPoint, mutable ? params : null],
    () => {
      return axios.post(endPoint, params).then(function (response) {
        return parser == null
          ? (response.data as ParsedRes)
          : parser(response.data as Res);
      });
    },
    {
      enabled: mutable ? params != null : true,
    }
  );

  return { setParams, query };
}
