import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../service/api";

const useQueryHook = ({ url, options, params, onSelect }) => {
  return useQuery(
    [url],
    async () => {
      const response = await API_URL.get(url, { params });
      return onSelect ? onSelect(response) : response;
    },
    {
      ...options,
    }
  );
};

export default useQueryHook;
