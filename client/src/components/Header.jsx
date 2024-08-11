import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { theDashboard } from "../redux/dashboard/dashboardSlice";
import { Alert, Spinner } from 'flowbite-react';
import { signout } from "../redux/user/userSlice";
import { theYourOrders } from "../redux/yourOrders/yourOrdersSlice";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signout());
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDashboard = async () => {
    try {
      const res = await fetch(`/api/dashboard/userdashboard/${currentUser.username}`);
      const data = await res.json();
      if (data.success === false) {
        console.log("error from bakck");
      }

      if (res.ok) {
        console.log("success");
        dispatch(theDashboard(data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error from catch");
    }
  };

  const handleYourorders = async () => {
    try {
      const res = await fetch(`/api/yourorders/useryourorders/${currentUser.username}`);
      const data = await res.json();
      if (data.success === false) {
        console.log("error from bakck");
      }

      if (res.ok) {
        console.log("success");
        dispatch(theYourOrders(data));
        navigate("/yourorders");
      }
    } catch (error) {
      console.log("error from catch");
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (menuItem) => {
    // Handle click on dropdown menu item
    // You can navigate to different pages or perform other actions based on the clicked menu item
    // After handling the click, close the dropdown
    setShowDropdown(false);
   
    // navigate('/about')
  navigate(`/about/${menuItem}`);
};



  return (
<<<<<<< HEAD
    <Navbar className="bg-gray-800">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-gray-300">
        <span className="px-2 py-1 mr-1 span-color rounded-lg bg-gray-400 text-gray-800 font-semibold">
=======
    <Navbar className="border-b-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
          Dorm
        </span>
        Drop
      </Link>

      <div className="flex gap-2 md:order-2">
        {/* <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button> */}
        {currentUser ? (
<<<<<<< HEAD
          <Dropdown arrowIcon={false} inline label={<Avatar alt="user"  />}>
=======
          <Dropdown arrowIcon={false} inline label={<Avatar alt="user" rounded />}>
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleDashboard}>Dashboard</Dropdown.Item>
            <Dropdown.Item onClick={handleYourorders}>YourOrders</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link className="rounded-md px-3.5 py-2.5 bg-gray-400 text-gray-800 shadow-lg hover:scale-105 transition-transform font-semibold" to="/signin">
            {/* <Button className="rounded-md bg-gray-400 text-gray-800 shadow-lg hover:scale-105 transition-transform" > */}
              Sign in/up
            {/* </Button> */}
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/" className="text-lg text-gray-400">
            Home
          </Link>
        </Navbar.Link>
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="flex items-center">
<<<<<<< HEAD
            <span className="text-lg mr-2 text-gray-400">About</span>
            {showDropdown ? <RiArrowDropUpLine className="text-gray-400" size={24} /> : <RiArrowDropDownLine className="text-gray-400" size={24} />}
=======
            <span className="text-lg mr-2">About</span>
            {showDropdown ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg">
              <div className="py-1">
                <button
                  onClick={() => handleDropdownItemClick("About Us")}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleDropdownItemClick("Our Work")}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Our Work
                </button>
                <button
                  onClick={() => handleDropdownItemClick("Sender Perspective")}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Sender Perspective
                </button>
                <button
                  onClick={() => handleDropdownItemClick("Receiver Perspective")}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Receiver Perspective
                </button>
              </div>
            </div>
          )}
        </div>
        <Navbar.Link active={path === "/contactus"} as={"div"}>
          <Link to="/contactus" className="text-lg text-gray-400">
            Contact Us
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}