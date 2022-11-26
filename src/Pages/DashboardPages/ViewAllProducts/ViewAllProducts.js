import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";

const ViewAllProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/products?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  // console.log(products);

  const handleAdvertiseProduct = (product) => {
    console.log("you apply this product for advertise", product);
  };

  const handleDeleteProduct = (product) => {
    // console.log(product);
    Swal.fire({
      title: "Are you sure, you want to delete this product?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${product?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success("Product Deleted Successfully.", {
                autoClose: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="mt-3">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back, {user?.displayName}{" "}
        </h1>
        <h1 className="text-2xl font-bold text-center mt-5">
          Manage All Products
        </h1>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th></th> */}
              <th>Product Name</th>
              <th>Condition</th>
              <th>Price</th>
              <th>Purchase Year</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product?._id}>
                <td>{i + 1}</td>
                {/* <td>
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td> */}
                <td>{product?.productName}</td>
                <td>{product?.condition}</td>
                <td>{product?.sellingPrice}</td>
                <td>{product?.purchaseYear}</td>
                <td>{product?.location}</td>
                <td>{product?.status}</td>

                <td className="grid grid-cols-2 gap-2">
                  {/* <button className="btn-sm btn-info">Sold</button> */}
                  {product.status === "available" && (
                    <button
                      onClick={() => handleAdvertiseProduct(product)}
                      className="btn-sm btn-secondary"
                    >
                      Advertise
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteProduct(product)}
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

export default ViewAllProducts;
