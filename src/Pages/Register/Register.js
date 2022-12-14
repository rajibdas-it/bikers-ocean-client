import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/bo_logo.png";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";
import useToken from "../../Hooks/useToken";
import Loader from "../Shared/Loader/Loader";

const Register = () => {
  useTitle("Register");
  const { userRegistration, googleSignIn, updateUserInfo, user } =
    useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [token] = useToken(createdUserEmail);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleUserSignUp = (event) => {
    setErrorMsg("");
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    // console.log(userName, email, password, image, role);
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
          userRegistration(email, password)
            .then((result) => {
              updateUserInfo(userName, imgData?.data?.url)
                .then((result) => {
                  fetch("https://bikers-ocean-server.vercel.app/users", {
                    method: "PUT",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      userName: userName,
                      image: imgData?.data?.url,
                      email: email,
                      role,
                      status: "not verified",
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.acknowledged) {
                        // alert("User Created Successfully");
                        toast.success("User Created Successfully", {
                          autoClose: 1500,
                        });
                        setCreatedUserEmail(email);
                      }
                    });
                })
                .catch((error) => {
                  setErrorMsg(error.message);
                });
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        }
      });
  };
  const handleGooleSignUp = () => {
    setErrorMsg("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("https://bikers-ocean-server.vercel.app/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            userName: user?.displayName,
            image: user?.photoURL,
            role: "user",
            status: "not verified",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("User Created Successfully", {
                autoClose: 1500,
              });
              setCreatedUserEmail(user?.email);
            }
          });
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  // console.log(user);

  return (
    <div className="w-full md:w-96 lg:h-[800px]  mx-auto mt-5">
      {/* <Loader></Loader> */}
      <div className="card w-full bg-base-100 shadow-xl mx-auto my-10 m-2">
        <figure className="px-10">
          <img src={logo} alt="bikers-ocean" className="rounded-xl h-28 w-28" />
        </figure>
        <div className="items-center text-center p-5">
          <h2 className="text-center text-3xl font-bold">Register!</h2>
          {errorMsg && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMsg}</span>
              </div>
            </div>
          )}
          <form onSubmit={handleUserSignUp}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username*</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="username"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                name="email"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                name="password"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              <select name="role" className="select select-bordered w-full">
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Upload Image*</span>
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
                value="Register"
                className="btn btn-wide bg-black"
              />
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-wide bg-black"
              onClick={handleGooleSignUp}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
              <p className="ml-2">Sign in with google</p>
            </button>
          </div>
          <div className="card-actions justify-center">
            <p>
              <small>
                Already have an account?{" "}
                <Link to="/login" className="underline text-blue-600">
                  login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
