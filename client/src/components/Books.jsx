import React, { useState} from 'react';
import { Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {RiDeleteBin2Fill} from "react-icons/ri";
import toast, {Toaster} from "react-hot-toast";
import {RemoveBook} from "../apiRequest/apiRequest.js";

const Books = (props) => {
    // eslint-disable-next-line react/prop-types
    const {item,refresh,setRefresh} = props

    const [loading , setLoading] = useState(false);


    const handleDelete =async(id) =>{
            setLoading(true)
            let res = await RemoveBook(id)
            setLoading(false)
            if(res['message'] === "success"){
                setRefresh(refresh+1)
                toast.success("Deleted Successfully")
            }
    }



    return (
        <div className={"bg-white flex flex-col gap-3 rounded-lg p-3"}>
            <img className={"w-full rounded-lg h-60"} src={item['image']} alt={"book"} />
            <div className={"flex flex-col gap-1 text-justify"}>
                <h3 className={"text-md font-medium uppercase"}>{item['title']}</h3>
                <h2 className={"lg:text-xl font-semibold text-gray-800"}> TK. {item['price']} </h2>
                <p className={"text-blue-700"}> <span className={"text-gray-700"}>short des:</span> {item['shortDes']} </p>
                <div className={"flex items-center gap-2 justify-evenly"}>
                    <Button className={"w-full"} variant="gradient">
                       <Link to={"/details?id=" + item['_id']}>See Details</Link>
                    </Button>
                    <Button onClick={()=>handleDelete(item['_id'])} color="red"> <RiDeleteBin2Fill size={18} /> </Button>
                </div>
            </div>
            <Toaster position="bottom-center" reverseOrder={false} gutter={8} />
        </div>
    );
};

export default Books;