import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const employees = [
  {
    id: 1,
    name: "Akash Agarwal",
    role: "Data Scientist",
    image: "assets/Akash.webp",
  },
  {
    id: 2,
    name: "Aditya Vashishth",
    role: "Data Scientist",
    image: "assets/Aditya.webp",
  },
  {
    id: 3,
    name: "Bhakti Sharma",
    role: "Product Manager",
    image: "assets/bhakti.webp",
  },
  {
    id: 4,
    name: "Pratiksha Pathak",
    role: "Full Stack Developer",
    image: "assets/pratiksha.webp",
  },
  {
    id: 5,
    name: "Radhika Jadaun",
    role: "UI/UX Designer",
    image: "assets/radhika.webp",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? employees.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === employees.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mb-25 w-full max-w-2xl mx-auto overflow-hidden  rounded-lg shadow-lg">
      <h1 className="font-bold text-center mb-5 text-4xl" >Team Members</h1>
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="min-w-full flex flex-col items-center p-6 bg-white"
          >
            <img
              src={employee.image}
              alt={employee.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{employee.name}</h2>
            <p className="text-lg text-gray-600">{employee.role}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute cursor-pointer top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
      >
        <FaChevronRight className="text-gray-800" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {employees.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 cursor-pointer rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;