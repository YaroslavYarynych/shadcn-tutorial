import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteHook = () => {
  const queryClient = useQueryClient();

  const deleteFn = async (productId: number | string) => {
    const { data } = await axios.delete(
      `https://dummyjson.com/products/${productId}`
    );
    return data;
  };

  return useMutation<number | string, unknown, number | string>({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
  });
};

export default useDeleteHook;
