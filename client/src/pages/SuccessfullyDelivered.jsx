<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { theDashboard } from "../redux/dashboard/dashboardSlice";
import { Alert, Spinner } from "flowbite-react";
import SP from "./cycle.jpg";

const SuccessfullyDelivered = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
=======
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { theDashboard } from '../redux/dashboard/dashboardSlice';
import { Alert, Spinner } from 'flowbite-react';

const SuccessfullyDelivered = () => {
  const [loading, setLoading] = useState(false);
  const dispatch =useDispatch();
  const navigate=useNavigate();
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
  const [countdown, setCountdown] = useState(5);
  const { currentUser } = useSelector((state) => state.user);
  const { currentReceiver } = useSelector((state) => state.RECEIVER);
  const formdata = {
    username: currentUser.username,
    receivers: [currentReceiver],
  };
<<<<<<< HEAD

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/dashboard/userdashboard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
=======
 


  useEffect(()=>{
   
 
    const handleSubmit = async () => {
 
     
      try {
        setLoading(true);
        const res = await fetch('/api/dashboard/userdashboard', {

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
          body: JSON.stringify(formdata),
        });
        const data = await res.json();
        setLoading(false);
        if (data.success === false) {
<<<<<<< HEAD
          console.log("error from bakck");
        }
=======
          console.log('error from bakck');
         
        }
       
       
        if(res.ok) {
          console.log('success');
          dispatch(theDashboard(data));
          // console.log(data);
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b

        if (res.ok) {
          console.log("success");
          dispatch(theDashboard(data));
          // console.log(data);
        }
      } catch (error) {
<<<<<<< HEAD
        console.log("error from cathc");
        setLoading(false);
      }
    };

=======
          console.log('error from cathc');
          setLoading(false);
      }
    };
   
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
    handleSubmit();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
<<<<<<< HEAD
        navigate("/dashboard");
=======
        navigate('/dashboard') 
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
<<<<<<< HEAD
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${SP})`, backgroundSize: "cover" }}>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center">
            <Spinner size="xl" className="w-20 h-20" /> {/* Spinner size */}
            <span className="pl-3 text-xl">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className="min-h-screen flex justify-center items-center bg-gray-100"
          style={{ backgroundImage: `url(${SP})`, backgroundSize: "cover" }}
        >
          <div className="bg-white bg-opacity-80 p-8 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-black">
              Successful Delivery!
            </h1>
            <p className="text-gray-700">
              Redirecting in {countdown} seconds...
            </p>
          </div>
        </div>
      )}
=======
    <div>
    {loading ? (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <Spinner size="xl" className="w-20 h-20" /> {/* Spinner size */}
          <span className="pl-3 text-xl">Loading...</span>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
<div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded shadow-md">
  <h1 className="text-2xl font-bold mb-4 text-black">Successful Delivery!</h1>
  <p className="text-gray-700">Redirecting in {countdown} seconds...</p>
</div>
</div>
    )}
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
    </div>
  );
};

export default SuccessfullyDelivered;
