import React from "react";
import { useLoaderData } from "react-router";
import Allapps from "../Components/Allapps";

const Apps = () => {
  const allapp = useLoaderData();
  console.log(allapp);
  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold">Our All Applications</h1>
      <p className="text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between p-10">
        <h1 className="text-xl font-semibold">(132) Apps Found</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4  p-8 gap-5 py-10">
        {allapp.map((allapps) => {
          return <Allapps key={allapps.id} allapps={allapps}></Allapps>;
        })}
      </div>
    </div>
  );
};

export default Apps;
