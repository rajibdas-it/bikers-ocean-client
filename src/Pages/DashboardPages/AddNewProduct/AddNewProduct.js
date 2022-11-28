import React, { useContext } from "react";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/productCategory").then((res) => res.json()),
  });
  // console.log(categories);
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const navigate = useNavigate();
  // console.log(currentDate);
  const { user } = useContext(AuthContext);
  const handleAddNewProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const category = form.category.value;
    const buyingPrice = form.buyingPrice.value;
    const sellingPrice = form.sellingPrice.value;
    const purchaseYear = form.purchaseYear.value;
    const condition = form.condition.value;
    const sellerPhone = form.sellerPhone.value;
    const location = form.location.value;
    const descriptions = form.descriptions.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=c777b9c0381e8aaf0936909d99159896`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "bikersOcean-token"
              )}`,
            },
            body: JSON.stringify({
              date: currentDate, //from date
              categoryId: category, //from db
              productName,
              buyingPrice, // from input field
              sellingPrice, // from input field
              purchaseYear, // from input field
              condition, // from input field
              sellerPhone, // from input field
              sellerEmail: user?.email, // from current user
              sellerName: user?.displayName, //from current user
              location, // from input field
              descriptions, // from input field
              image: imgData.data.url, // from api
              status: "available",
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product added Successfully", {
                  autoClose: 1500,
                });
                navigate("/dashboard/view-all-product");
              }
            });
        }
      });
  };
  return (
    <div className="border border-red-500 w-full md:w-2/3 h-[600px]">
      <div className="card w-full bg-base-100 shadow-xl mx-auto my-10 m-2">
        <div className="items-center text-center p-5">
          <h2 className="text-center text-3xl font-bold">Add New Products</h2>
          <form onSubmit={handleAddNewProduct}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="productName"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
                required
              >
                {categories.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Buying Price</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="buyingPrice"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Selling Price</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="sellingPrice"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Purchase Year</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="purchaseYear"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <select
                  name="condition"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone No.</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="sellerPhone"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="location"
                  required
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Short Descriptions</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="descriptions"
                required
              ></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-error w-full text-black"
                name="image"
                accept="image/*"
                required
              />
            </div>
            <div className="card-actions justify-center mt-5">
              <input
                type="submit"
                value="Add Category"
                className="btn btn-wide bg-black"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
