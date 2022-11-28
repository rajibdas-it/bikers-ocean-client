import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";
import Loader from "../../Shared/Loader/Loader";
import useTitle from "../../../Hooks/useTitle";

const ManageUsers = () => {
  useTitle("Dashboard - Manage User");
  const { user } = useContext(AuthContext);
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`https://bikers-ocean-server.vercel.app/allUsers`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
        },
      }).then((res) => res.json()),
  });

  //   console.log(users);

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDeleteUser = (user) => {
    // console.log(user);
    Swal.fire({
      title: `Are you sure, you want to delete ${user?.userName}?`,
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bikers-ocean-server.vercel.app/users/${user?._id}`, {
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
              toast.success("User Deleted Successfully.", {
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
              <th>UserName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user?._id}>
                <td>{i + 1}</td>
                {/* <td>
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td> */}
                <td>{user?.userName}</td>
                <td>{user?.email}</td>

                <td className="grid grid-cols-2 gap-2">
                  {/* <button className="btn-sm btn-info">Sold</button> */}

                  <button
                    onClick={() => handleDeleteUser(user)}
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

export default ManageUsers;
