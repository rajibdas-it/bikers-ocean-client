import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/UserContext";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(
        `https://bikers-ocean-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "bikersOcean-token"
            )}`,
          },
        }
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  // console.log(bookings);

  const handleDeleteBooking = (booking) => {
    // console.log(wishedItem);
    Swal.fire({
      title: `Are you sure, you want to delete ${booking?.productName} from booking?`,
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bikers-ocean-server.vercel.app/bookings/${booking._id}`,
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
              toast.success(`Successfully Deleted ${booking?.productName}`, {
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
      <h1 className="text-center text-2xl font-bold my-5">My Bookings</h1>
      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Item Name</th>
                {/* <th>User Name</th>
                <th>User Email</th> */}
                <th>Price</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                {/* <th>Payment Status</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => (
                <tr key={booking?._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.productName}</td>
                  {/* <td>{booking.userName}</td>
                  <td>{booking.userEmail}</td> */}
                  <td>{booking?.price}</td>
                  <td>{booking?.sellerName}</td>
                  <td>{booking?.sellerEmail}</td>
                  {/* <td>{booking.status}</td> */}
                  <td>
                    {booking?.price && !booking?.paid && (
                      <Link to={`/dashboard/payment/${booking?._id}`}>
                        <button className="btn btn-sm btn-secondary mr-1">
                          Pay
                        </button>
                      </Link>
                    )}
                    {booking?.price && booking?.paid && <span>Paid</span>}
                    {!booking?.paid && (
                      <button
                        onClick={() => handleDeleteBooking(booking)}
                        className="btn btn-sm btn-primary"
                      >
                        remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
