import React, {useEffect, useState} from 'react';
import FullDetails from "../components/FullDetails.jsx";
import {useParams} from "react-router-dom";
import {ReadSingleBook} from "../apiRequest/apiRequest.js";

const BookDetailsPage = () => {
    const {bookID} = useParams()
    const [data,setData] = useState(null);
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        (async()=>{
            setLoading(true)
            let res = await ReadSingleBook(bookID);
            setLoading(false);
            setData(res);
        })()
    }, []);

    return (
        <div className={"bg-[#F8F0F0]"}>
            {
              data? <FullDetails data = { data} /> : <h2 className={"text-red-700 font-bold text-3xl"}>No Data found to show</h2>
            }
        </div>
    );
};

export default BookDetailsPage;