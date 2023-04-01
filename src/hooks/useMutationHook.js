import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../service/api";

// methods: "post" , "get" , "put" , "patch" , "delete"
// return {  mutate, data, status, isLoading, isError, error, refetch, isFetching,}

const useMutationHook = ({ method = "get", url, options, onSelect }) => {
  return useMutation(
    async (data) => {
      const response = await API_URL({
        method,
        url,
        data,
      });
      return onSelect ? onSelect(response) : response;
    },
    {
      ...options,
    }
  );
};

export default useMutationHook;
