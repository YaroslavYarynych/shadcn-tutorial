import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { useForm } from "react-hook-form";

import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import useAddHook from "@/hooks/useAddHook";
import React from "react";

const formSchema = zod.object({
  title: zod.string().min(3, "Title must be at least 3 characters"),
  description: zod
    .string()
    .min(10, "Description must be at least 10 characters"),
  price: zod.number().min(1, "Price must be at least 1"),
  discountPercentage: zod.number().min(1, "Discount must be at least 1%"),
  rating: zod
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
});

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalForm: React.FC<Props> = ({ setIsOpen }) => {
  const { mutate: mutateAdd } = useAddHook();
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      discountPercentage: 0,
      rating: 1,
    },
  });

  const id = React.useId();

  const handleSubmit = (values: zod.infer<typeof formSchema>) => {
    const newProduct = {
      ...values,
      id: id,
      category: "",
      stock: 1,
      brand: "",
      sku: "",
      tags: [],
      weight: 0,
      dimensions: {
        width: 0,
        height: 0,
        depth: 0,
      },
      warrantyInformation: "",
      shippingInformation: "",
      availabilityStatus: "",
      reviews: [],
      returnPolicy: "",
      minimumOrderQuantity: 1,
      meta: [
        {
          createdAt: String(new Date()),
          updatedAt: "",
          barcode: "",
          qrCode: "",
        },
      ],
      thumbnail: "",
      images: [],
    };

    mutateAdd(newProduct);
    setIsOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit, (e) => {
          console.log(e);
        })}
        className="flex flex-col gap-[10px] md:gap-[15px] mt-[10px] md:mt-[10px]"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Title</FormLabel>
              <FormControl>
                <Input
                  className="w-[200px] md:w-[500px]"
                  placeholder="Title"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Description</FormLabel>
              <FormControl>
                <Input
                  className="w-[200px] md:w-[500px]"
                  placeholder="Description"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  className="w-[200px] md:w-[500px]"
                  placeholder="Price"
                  type="number"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="discountPercentage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Discount</FormLabel>
              <FormControl>
                <Input
                  className="w-[200px] md:w-[500px]"
                  placeholder="discount %"
                  type="number"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Rating</FormLabel>
              <FormControl>
                <Input
                  className="w-[200px] md:w-[500px]"
                  max={5}
                  min={1}
                  placeholder="Rating"
                  type="number"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-[10px] md:mt-[20px]" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
