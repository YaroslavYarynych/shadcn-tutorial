import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteHook = () => {
  const queryClient = useQueryClient();

  const deleteFn = async (productId: number) => {
    const { data } = await axios.delete(
      `https://dummyjson.com/products/${productId}`
    );
    return data;
  };

  return useMutation<number, unknown, number>({
    mutationFn: deleteFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
  });
};

export default useDeleteHook;
