import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import moment from "moment/moment";
const OrderModal = ({ bookingItem }) => {
  const { user } = useContext(AuthContext);
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  const {
    _id,
    categoryId,
    buyingPrice,
    condition,
    image,
    location,
    productName,
    purchaseYear,
    sellerName,
    sellerEmail,
    sellerPhone,
    sellingPrice,
  } = bookingItem;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.buyerName.value;
    const email = form.buyerEmail.value;
    const productName = form.productName.value;
    const address = form.buyerAddress.value;
    const phone = form.phoneNo.value;
    const price = form.price.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
      date: currentDate,
      name,
      email,
      productName,
      address,
      phone,
      price,
      meetingLocation,
      image,
      productId: _id,
      sellerName,
      sellerEmail,
      sellerPhone,
    };
    console.log(booking);
  };
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Booking for {productName}</h3>

          <div className=" w-full ">
            <div className="card w-full  mx-auto my-10 m-2">
              <div className="items-center text-center p-5">
                <form onSubmit={handleBooking}>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      name="productName"
                      defaultValue={productName}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Buyer Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      name="buyerName"
                      defaultValue={user?.displayName}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Buyer Email</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.email}
                      className="input input-bordered w-full"
                      name="buyerEmail"
                      disabled
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-14"
                      name="buyerAddress"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Phone No.</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        name="phoneNo"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={sellingPrice}
                        className="input input-bordered w-full"
                        name="price"
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Metting Locations</span>
                    </label>
                    <select
                      name="meetingLocation"
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Mymensingh">Mymensingh </option>
                    </select>
                  </div>

                  <div className="card-actions justify-end mt-5">
                    <input
                      type="submit"
                      value="Confirm Booking"
                      className="btn btn-wide bg-primary"
                    />
                  </div>
                  {/* <div className="modal-action">
                    <label htmlFor="order-modal" className="btn btn-primary">
                      Confirm Booking
                    </label>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Put this part before </body> tag */}
    </div>
  );
};

export default OrderModal;
