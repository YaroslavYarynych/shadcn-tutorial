import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./components/shared/data-table";
import { columns } from "./components/shared/columns";

import { useEffect, useState } from "react";
import { Modal } from "./components/shared/modal";

import axios from "axios";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["all-products"],
    queryFn: () =>
      axios("https://dummyjson.com/products?limit=0").then((res) => res.data),
  });

  // const {} = useMutation({
  //   mutationFn: (newPost: IProduct) =>
  //     fetch("https://dummyjson.com/products/add", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newPost),
  //     }).then((res) => res.json()),
  //   onSuccess: (newProduct: IProduct) => {
  //     // відправляємо запит після успішнього додаваня
  //     // queryClient.invalidateQueries({ queryKey: ["all-products"] });

  //     // вручну додали в кеш дані
  //     queryClient.setQueryData(["all-products"], (oldProducts: IProduct[]) => [
  //       ...oldProducts,
  //       newProduct,
  //     ]);
  //   },
  // });

  const handleOpenModal = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold	text-left pb-[20px]">All Products</h1>
        {isLoading && <h1>LOADING</h1>}
        {isSuccess && (
          <DataTable
            columns={columns}
            data={data.products}
            handleOpenModal={handleOpenModal}
          />
        )}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default App;
