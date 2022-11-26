import { useQuery } from "@tanstack/react-query";
import React from "react";

const ViewAllProducts = () => {
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage All Category</h1>
    </div>
  );
};

export default ViewAllProducts;
