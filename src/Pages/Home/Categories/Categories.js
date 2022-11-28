import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Shared/Loader/Loader";
import Category from "../Category/Category";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://bikers-ocean-server.vercel.app/categories").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold mb-10">Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category) => (
          <Category key={category?._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
