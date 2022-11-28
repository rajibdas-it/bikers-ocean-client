import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/UserContext";
import useTitle from "../../../Hooks/useTitle";

const ReportedProducts = () => {
  useTitle("Dashboard - Reported Item");
  const { user } = useContext(AuthContext);

  const {
    data: reportedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: () =>
      fetch(`https://bikers-ocean-server.vercel.app/reportedItems`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
        },
      }).then((res) => res.json()),
  });

  // console.log(reportedProducts);

  const handleDeleteProduct = (item) => {
    // console.log(wishedItem);
    Swal.fire({
      title: `Are you sure, you want to delete ${item?.productName} from products list?`,
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bikers-ocean-server.vercel.app/deletedReportedItem/${item.productId}`,
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
              toast.success(`Successfully Deleted ${item?.productName}`, {
                autoClose: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-5">Reported Products</h1>
      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Reported By</th>
                <th>User Email</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Actions</th>
                <th>Admin Comments</th>
              </tr>
            </thead>
            <tbody>
              {reportedProducts?.map((item, i) => (
                <tr key={item?._id}>
                  <th>{i + 1}</th>
                  <td>{item?.userName}</td>
                  <td>{item?.userEmail}</td>
                  <td>{item?.productId}</td>
                  <td>{item?.productName}</td>
                  <td>{item?.sellerName}</td>
                  <td>{item?.sellerEmail}</td>
                  <td>
                    {!item?.adminComments && (
                      <button
                        onClick={() => handleDeleteProduct(item)}
                        className="btn btn-sm btn-primary"
                      >
                        remove
                      </button>
                    )}
                  </td>
                  <td>{item?.adminComments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportedProducts;
