import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../Shared/Loader/Loader";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const {
    data: items = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishlistItems", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/mywishlist?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDeleteWishItem = (wishedItem) => {
    // console.log(wishedItem);
    Swal.fire({
      title: `Are you sure, you want to delete ${wishedItem?.productName} from your wishlist?`,
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mywishlist/${wishedItem._id}`, {
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
              toast.success(`Successfully Deleted ${wishedItem?.productName}`, {
                autoClose: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl font-bold my-5">Wishlist Items</h1>
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
                <th>Seller</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>{item.productName}</td>
                  {/* <td>{item.userName}</td>
                  <td>{item.userEmail}</td> */}
                  <td>{item.price}</td>
                  <td>{item.sellerEmail}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary mr-1" disabled>
                      Book & Pay now
                    </button>
                    <button
                      onClick={() => handleDeleteWishItem(item)}
                      className="btn btn-sm btn-primary"
                    >
                      remove
                    </button>
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

export default WishList;
