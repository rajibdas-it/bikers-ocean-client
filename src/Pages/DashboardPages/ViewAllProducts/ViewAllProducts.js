import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const ViewAllProducts = () => {
  useTitle("Dashboard - Manage Product");
  const { user } = useContext(AuthContext);
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: () =>
      fetch(
        `https://bikers-ocean-server.vercel.app/products?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "bikersOcean-token"
            )}`,
          },
        }
      ).then((res) => res.json()),
  });

  // console.log(products);

  const handleAdvertiseProduct = (product) => {
    // console.log("you apply this product for advertise", product);
    const { _id, productName, status, image } = product;

    const addvertiseProduct = {
      date: currentDate,
      productId: _id,
      productName,
      image,
      status,
    };
    fetch("https://bikers-ocean-server.vercel.app/createAdvertise", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
      },
      body: JSON.stringify(addvertiseProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.upsertedCount > 0) {
          toast.success("Product added on advertise section on home page", {
            autoClose: 1500,
          });
        } else if (data.matchedCount > 0) {
          toast.info(
            "Product already added on advertise section. Please check.",
            {
              autoClose: 1500,
            }
          );
        }
      });
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
        fetch(
          `https://bikers-ocean-server.vercel.app/products/${product?._id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "bikersOcean-token"
              )}`,
            },
          }
        )
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
            {products?.map((product, i) => (
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
                  {product?.status === "available" && (
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
