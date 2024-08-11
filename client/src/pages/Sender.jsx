import { Alert, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { theSender } from "../redux/sender/senderSlice";
import cycle from "./cycle.jpg";

const Sender = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();

=======
    const dispatch=useDispatch();
  
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.registrationNumber ||
      !formData.mobileNumber ||
      !formData.availabilityTime ||
      !formData.name
    ) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/sender/senderform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }

      setLoading(false);
      if (res.ok) {
        dispatch(theSender(data));
        navigate("/receiverpost");
        //send this to reciver's post lists
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div
      className="min-h-screen flex justify-center items-center "
      style={{ backgroundImage: `url(${cycle})`, backgroundSize: "cover" }}
    >
      <div className="max-w-md bg-slate-300  shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4 text-center ">
          Enter Your Details
        </h1>
=======
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md bg-white bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100  shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4 text-center ">Enter Your Details</h1>
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
<<<<<<< HEAD
              className="w-full px-4 py-2 border   rounded-md focus:outline-none focus:border-blue-500"
=======
              className="w-full px-4 py-2 border bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100  rounded-md focus:outline-none focus:border-blue-500"
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
              placeholder="Enter your name "
            />
          </div>
          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-lg font-medium"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              onChange={handleChange}
<<<<<<< HEAD
              className="w-full px-4 py-2   border rounded-md focus:outline-none focus:border-blue-500"
=======
              className="w-full px-4 py-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100  border rounded-md focus:outline-none focus:border-blue-500"
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
              placeholder="Enter your registration number"
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-lg font-medium">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              onChange={handleChange}
<<<<<<< HEAD
              className="w-full px-4 py-2  border rounded-md focus:outline-none focus:border-blue-500"
=======
              className="w-full px-4 py-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100  border rounded-md focus:outline-none focus:border-blue-500"
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label
              htmlFor="availabilityTime"
              className="block text-lg font-medium"
            >
              Availability Time (mins)
            </label>
            <input
              type="number"
              id="availabilityTime"
              onChange={handleChange}
<<<<<<< HEAD
              className="w-full px-4 py-2  border rounded-md focus:outline-none focus:border-blue-500"
=======
              className="w-full px-4 py-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100  border rounded-md focus:outline-none focus:border-blue-500"
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
              placeholder="Example 10 min"
            />
          </div>
          <div>
            <button
              type="submit"
<<<<<<< HEAD
              className="w-full hover:scale-105  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
=======
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Sender;
