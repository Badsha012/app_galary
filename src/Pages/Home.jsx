import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
     <div className="text-center sm:p-4 ">
         <h1 className=" md:text-5xl sm:text-2xl text-center font-bold text-black  py-1">We Build<br></br> <span className=" text-violet-700"> Productive </span>Apps</h1>
         <p className="text-gray-400">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            <br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     </div>
     <div className="flex justify-center gap-4 text-xl  font-semibold px-5 bg-white py-4">
        <Link className="border " to={'https://play.google.com/store/apps?hl=en'}> <FontAwesomeIcon icon={faGooglePlay} className="br-2" /> Google Play</Link>
        <Link className="border" to={'https://www.apple.com/app-store/'}>  <FontAwesomeIcon icon={faAppStoreIos}  className="br-2 "/>App Store</Link>
     </div>

     <div className="flex justify-center items-center">
        <img src="https://i.ibb.co.com/LzJDW19w/hero.png" className="w-140 h-80 " alt="hero" srcset="" />

     </div>
     <div className="bg-violet-700 text-white">
        <h1 className="text-3xl">Trusted by Millions, Built for You</h1>
        
     </div>

    </div>


  );
};

export default Home;
