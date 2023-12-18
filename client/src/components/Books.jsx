import React from 'react';
import { Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

const Books = ({item}) => {
    const navigate = useNavigate()
    const seeDetails = (id) =>{
        navigate(`book-details/${id}`)
    }
    return (
        <div className={"bg-white flex flex-col gap-3 rounded-lg p-3"}>
            <img className={"w-full rounded-lg h-60"} src={item['image']} alt={"book"} />
            <div className={"flex flex-col gap-1 text-justify"}>
                <h3 className={"text-md font-medium uppercase"}>{item['title']}</h3>
                <h2 className={"lg:text-xl font-semibold text-gray-800"}> TK. {item['price']} </h2>
                <p className={"text-blue-700"}> <span className={"text-gray-700"}>short des:</span> {item['shortDes']} </p>
                <Button onClick={() => seeDetails(item['_id'])}
                        variant="gradient">See Details</Button>
            </div>

        </div>
    );
};

export default Books;