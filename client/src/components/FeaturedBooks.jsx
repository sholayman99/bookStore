import React, {useEffect, useState} from 'react';
import {ReadAllBook} from "../apiRequest/apiRequest.js";
import {Card, CardHeader, CardBody, CardFooter, Typography, Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

const FeaturedBooks = () => {
    const [books , setBooks] = useState([]);
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        (async() =>{

            let bookData = await ReadAllBook() ;
            setBooks(bookData);

        })()
    }, []);


    const seeDetails = (id) =>{
        navigate(`book-details/${id}`)
    }

    return (
        <section className={"p-5 "}>
            <h2 className={"lg:text-3xl  md:text-2xl text-xl font-bold uppercase my-8"}>Featured Books</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10"}>
             {
             books.map((book,i) => <div key={i.toString()}>
               <div className={"bg-white flex flex-col gap-3 rounded-lg p-3"}>
                 <img className={"w-full rounded-lg h-60"} src={book['image']} alt={"book"} />
                 <div className={"flex flex-col gap-1 text-justify"}>
                  <h3 className={"text-md font-medium uppercase"}>{book['title']}</h3>
                   <h2 className={"lg:text-xl font-semibold text-gray-800"}> TK. {book['price']} </h2>
                   <p className={"text-blue-700"}> <span className={"text-gray-700"}>short des:</span> {book['shortDes']} </p>
                     <Button onClick={() => seeDetails(book['_id'])}
                     variant="gradient">See Details</Button>
                 </div>

               </div>
                 </div>
             )}
            </div>
        </section>
    );
};

export default FeaturedBooks;