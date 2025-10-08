import React from "react";
import { Link, useLoaderData } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import AppCard from "../Components/AppCard";

const Home = () => {
    const apps=useLoaderData()
    console.log(apps);
  return (
    <div className="bg-gray-100">
      <div className="text-center sm:p-4 ">
        <h1 className=" md:text-5xl text-4xl text-center font-bold text-black  py-1">
          We Build<br></br>{" "}
          <span className=" text-violet-700"> Productive </span>Apps
        </h1>
        <p className="text-gray-400">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br></br>Our goal is to turn your ideas into digital experiences that
          truly make an impact.
        </p>
      </div>
      <div className="flex justify-center gap-4 text-xl  bg-gray-100 font-semibold px-5  py-4">
        <Link
          className="border "
          to={"https://play.google.com/store/apps?hl=en"}
        >
          {" "}
          <FontAwesomeIcon icon={faGooglePlay} className="br-2" /> Google Play
        </Link>
        <Link className="border" to={"https://www.apple.com/app-store/"}>
          {" "}
          <FontAwesomeIcon icon={faAppStoreIos} className="br-2 " />
          App Store
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="https://i.ibb.co.com/LzJDW19w/hero.png"
          className="md:w-140 md:h-80 sm:w-100 sm:h-60 "
          alt="hero"
          srcset=""
        />
      </div>
      <div className="bg-violet-500 text-white py-10 ">
        <h1 className="text-4xl font-bold text-center ">
          Trusted by Millions, Built for You
        </h1>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-2/3 mx-auto py-5 p-10 text-center">
          <div className="px-8">
            <p className="text-gray-300">Total Downloads</p>
            <h1 className="text-5xl  font-bold">29.6M</h1>
            <p className="text-gray-300">21% more than last month</p>
          </div>
          <div>
            <p className="text-gray-300">Total Reviews</p>
            <h1 className="text-5xl  font-bold">906K</h1>
            <p className="text-gray-300">46% more than last month</p>
          </div>
          <div>
            <p className="text-gray-300">Active Apps</p>
            <h1 className="text-5xl font-bold">132+</h1>
            <p className="text-gray-300">31 more will Launch</p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-4xl font-bold text-center">Trending Apps</h1>
        <p className="text-center">Explore All Trending Apps on the Market developed by us</p>
      </div>
<div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 p-5">
    
{
    apps.map(app =>{
        
        return <AppCard key={app.id} app={app}></AppCard>
    })
}
</div>

    </div>

   
  );
};

export default Home;
