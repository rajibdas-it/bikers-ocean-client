import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";

const ViewCategory = () => {
  const { user } = useContext(AuthContext);
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  const handleDeleteCategory = (id) => {
    console.log("you want to delete this category", id);
  };

  // console.log(categories);
  return (
    <div className="mt-3">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back, {user?.displayName}{" "}
        </h1>
        <h1 className="text-2xl font-bold text-center mt-5">
          Manage All Category
        </h1>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Descriptions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => (
              <tr key={category._id}>
                <th>{i + 1}</th>
                <td>{category.categoryName}</td>
                <td>{category.descriptions}</td>
                <td>
                  <button
                    onClick={() => handleDeleteCategory(category._id)}
                    className="btn-sm btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCategory;
