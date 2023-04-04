import Form from "@/components/Form";
import React from "react";

function contact() {
  return (
    <div>
      <h1 className=" font-bold uppercase text-3xl text-center my-[2rem] tracking-wider ">
        work with me
      </h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl text-center tracking-wider">
          I would love to hear from you! Fill out the form below to get in touch
          with me.
        </p>
        <Form />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-[4rem]">
        <div className="flex flex-col justify-center items-center md:w-[30%]">
          <h2 className=" font-bold uppercase text-2xl text-center my-[2rem] tracking-wider ">
            follow me
          </h2>
          <ul className="flex justify-around items-center w-[50%]">
            <li>facebook</li>
            <li>instagram</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center md:w-[30%] ">
          <h2 className=" font-bold uppercase text-2xl text-center my-[2rem] tracking-wider ">
            General enquiries
          </h2>
          <p>raineg@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default contact;
