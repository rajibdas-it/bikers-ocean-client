import React from "react";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const navigate = useNavigate();
  // console.log(currentDate);
  const handleAddCategory = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.categoryName.value;
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
          fetch("http://localhost:5000/categories", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "bikersOcean-token"
              )}`,
            },
            body: JSON.stringify({
              date: currentDate,
              categoryName: name,
              descriptions,
              image: imgData.data.url,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Category Created Successfully", {
                  autoClose: 1500,
                });
                navigate("/dashboard/view-all-category");
              }
            });
        }
      });
  };
  return (
    <div className="border border-red-500 w-full md:w-2/3 h-[600px]">
      <div className="card w-full bg-base-100 shadow-xl mx-auto my-10 m-2">
        <div className="items-center text-center p-5">
          <h2 className="text-center text-3xl font-bold">Add New Category</h2>
          <form onSubmit={handleAddCategory}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="categoryName"
                required
              />
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
                <span className="label-text">Category Image*</span>
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

export default CreateCategory;
