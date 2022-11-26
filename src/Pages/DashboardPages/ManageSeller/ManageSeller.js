import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";
import Loader from "../../Shared/Loader/Loader";

const ManageSeller = () => {
  const { user } = useContext(AuthContext);
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/allSeller").then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  // console.log(products);

  const handleVerifySeller = (seller) => {
    // console.log(seller);
    Swal.fire({
      title: `Are you sure, you want to verify ${seller?.userName}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/verifySeller/${seller._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success(
                `Successfully Verified ${seller?.userName} as a seller`,
                {
                  autoClose: 1500,
                }
              );
              refetch();
            }
          });
      }
    });
  };

  const handleDeleteSeller = (seller) => {
    // console.log(seller);
    Swal.fire({
      title: `Are you sure, you want to delete ${seller?.userName}?`,
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${seller?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success("Seller Deleted Successfully.", {
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
        <h1 className="text-2xl font-bold text-center mt-5">Manage Seller</h1>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th></th> */}
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller?._id}>
                <td>{i + 1}</td>
                {/* <td>
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td> */}
                <td>{seller?.userName}</td>
                <td>{seller?.email}</td>

                <td>{seller?.status}</td>

                <td className="grid grid-cols-2 gap-2">
                  {/* <button className="btn-sm btn-info">Sold</button> */}
                  {seller.status === "not verified" && (
                    <button
                      onClick={() => handleVerifySeller(seller)}
                      className="btn-sm btn-secondary"
                    >
                      Verified
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteSeller(seller)}
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

export default ManageSeller;
