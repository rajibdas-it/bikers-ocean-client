import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";

const ViewCategory = () => {
  const { user } = useContext(AuthContext);
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDeleteCategory = (id) => {
    Swal.fire({
      title: "Are you sure, you want to delete this category?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/categories/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "bikersOcean-token"
            )}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success("Category Deleted Successfully.", {
                autoClose: 1500,
              });
              refetch();
            }
          });
      }
    });
    // console.log("you want to delete this category", id);
    // Swal.fire("Your Delete Id", id);
    // Swal.fire({
    //   title: "Are you sure, You want to delete Category?",
    //   text: "Once deleted, you will not be able to recover this category!",
    //   icon: "warning",
    //   buttons: [false, true],
    // }).then((willDelete) => {
    //   if (willDelete) {
    // amr kajer jinish
    //     fetch(`http://localhost:5000/categories/${id}`, {
    //       method: "DELETE",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.deletedCount > 0) {
    //           toast.success("Category Deleted Successfully.", {
    //             autoClose: 1500,
    //           });
    //           refetch();
    //         }
    //       });
    //Finished
    //     // Swal.fire("success", `Your Category has been deleted! ${id}`);
    //   } else {
    //     Swal.fire("Your imaginary file is safe!");
    //   }
    // });
    // fetch(`http://localhost:5000/categories/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.deletedCount > 0) {
    //       toast.success("Category Deleted Successfully.", { autoClose: 1500 });
    //       refetch();
    //     }
    //   });
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
