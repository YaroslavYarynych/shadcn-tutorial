import { IProduct } from "@/utils/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useAddHook = () => {
  const queryClient = useQueryClient();

  const addFn = async (product: IProduct) => {
    const { data } = await axios.post(`https://dummyjson.com/products/add`, {
      product,
    });
    return data.data;
  };

  return useMutation({
    mutationFn: addFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
    onError: (e) => console.log(e),
  });
};

export default useAddHook;
