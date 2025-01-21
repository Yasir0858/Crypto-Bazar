import React from "react";
import { useSelector } from "react-redux";


const PageNotFound = () => {

  const {theme}= useSelector((state)=>state.coins);
  return ( <div
    className={
      theme
        ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
        : "min-h-[90vh] py-16 px-8 md:px-16 "
    }
  >
    <h1 className="my-10 text-center text-red-600 text-4xl font-bold">
      Page Not Found...
    </h1>
  </div>)
};

export default PageNotFound;
