import React, { useState } from 'react';

import NavBar from '../components/NavBar';
import profileImage from '../assets/profile.jpg';
import Footer from '../components/Footer';

const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col px-5 sm:items-center">
      <NavBar />
      <div className="sm:w-larger">
        <button
          className="sm:px-10 sm:py-6 text-blue-500 focus:outline-none hover:text-blue-400"
          onClick={() => props.history.push('/me')}
        >
          <i className="fas fa-angle-left pr-2"></i>
          Back
        </button>
        <div className="sm:border border-gray-400 rounded-lg mb-3 sm:px-10">
          <h2 className="text-2xl mt-6">Change Info</h2>
          <p className="text-sm text-gray-500">Changes will be reflected to every services</p>
          <div className="flex items-center py-6">
            <div className="w-24 relative">
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <i className="fas fa-camera text-white hover:text-gray-300 text-opacity-75"></i>
              </button>
              <img src={profileImage} alt="profile" className="w-full rounded-lg" />
            </div>
            <span className="text-gray-500 px-3 sm:px-10 sm:w-4/12">CHANGE PHOTO</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pb-4">
              <label htmlFor="name" className="pb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="focus:outline-none border border-gray-300 p-4 rounded-lg sm:w-3/5"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="bio" className="pb-1">
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                rows="3"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Enter your bio..."
                className="focus:outline-none border border-gray-300 p-4 rounded-lg sm:w-3/5"
              ></textarea>
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="phone" className="pb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone..."
                className="focus:outline-none border border-gray-300 p-4 rounded-lg sm:w-3/5"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="email" className="pb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                className="focus:outline-none border border-gray-300 p-4 rounded-lg sm:w-3/5"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="password" className="pb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter your password..."
                className="focus:outline-none border border-gray-300 p-4 rounded-lg sm:w-3/5"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-8 mb-5 bg-blue-500 focus:outline-none hover:bg-blue-400 rounded-lg text-white"
            >
              Save
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;
