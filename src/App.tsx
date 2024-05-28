import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DataTable } from "./components/shared/data-table";
import { columns } from "./components/shared/columns";
import { IProduct } from "./utils/interfaces";

import "./App.css";

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["all-products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products?limit=0").then((res) => res.json()),
  });

  console.log(data);

  const {} = useMutation({
    mutationFn: (newPost: IProduct) =>
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onSuccess: (newProduct: IProduct) => {
      // відправляємо запит після успішнього додаваня
      // queryClient.invalidateQueries({ queryKey: ["all-products"] });

      // вручну додали в кеш дані
      queryClient.setQueryData(["all-products"], (oldProducts: IProduct[]) => [
        ...oldProducts,
        newProduct,
      ]);
    },
  });

  return (
    <div className="container">
      <h1 className="text-3xl font-bold	text-left pb-[20px]">All Products</h1>
      {isLoading && <h1>LOADING</h1>}
      {isSuccess && (
        <>
          <DataTable columns={columns} data={data.products} />
        </>
      )}
    </div>
  );
}

export default App;
