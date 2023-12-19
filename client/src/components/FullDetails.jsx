import React from 'react';
import { Button,Rating  } from "@material-tailwind/react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import {Link, useNavigate} from "react-router-dom";


const FullDetails = ({data}) => {



    return (
        <section className={"px-5 min-h-screen  flex items-center justify-center "}>
            <div className={"  bg-white lg:p-10 p-5 rounded-md gap-24 flex lg:flex-row flex-col" +
             " items-center justify-around gap-10"}>
            <div>
                <div className={" border p-10  border-gray-500 rounded-md bg-base-200"}>
                    <img className={"h-64"} src={data['image']} alt={""} />

                </div>
                <Button className={"w-full mt-2"}>
                    <Link to={"/add-book?id=" + data['_id']} >Edit</Link>
                </Button>
            </div>

            <div className={"text-justify flex flex-col gap-4 max-w-lg"}>
             <p className={"text-gray-600 text-sm font-thin"}> {data['details']} </p>

             <div className={" flex flex-col gap-2"}>
             <h3 className={"lg:text-xl font-medium uppercase"}>
             {data['title']} <span className={"text-xs font-bold" +
             "lowercase text-orange-900"}> ({data['remark']}) </span></h3>

             <h4 className={"lg:text-sm  uppercase text-gray-500"}>
                 By <span className={"text-blue-700"}>{data['author']}</span></h4>

             <h6 className={"text-gray-800 text-sm font-thin"}>
             Category: <span className={"text-blue-700 font-semibold"}>
             {data['category']}</span> </h6>

             <Rating value={data['rating']} />

             <h1 className={"lg:text-xl font-semibold text-gray-800"}>
             TK. {data['price']} </h1>

             { data['stock']>0 ? <h5 className={"text-gray-800 text-sm " +
             "font-thin"}> Available: <span className={"text-green-700" +
             "font-semibold"}>{ data['stock'] }</span>

              </h5> : <h4 className={"text-gray-700 text-md "}>out of stock </h4> }

              </div>

              <div className={"flex items-start gap-3"}>
              <Button className={"flex gap-2 items-start"} color="green">
              <HiOutlineShoppingCart size={15} />Add To Cart
              </Button>
              <Button className={"flex gap-2 items-start"} color="blue" >
              <HiOutlineHeart size={15} /> Add To Wish
              </Button>
              </div>

              </div>
            </div>

        </section>
    );
};

export default FullDetails;