import React, {useEffect, useState} from 'react';
import {ReadAllBook, RemoveBook} from "../apiRequest/apiRequest.js";
import { Button} from "@material-tailwind/react";
import {Link, useNavigate} from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import toast, {Toaster} from "react-hot-toast";


const FeaturedBooks = () => {
    const [books , setBooks] = useState([]);
    const [loading , setLoading] = useState(false);
    const [refresh , setRefresh] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        (async() =>{
            setLoading(true);
            let bookData = await ReadAllBook() ;
            setLoading(false);
            setBooks(bookData);

        })()
    }, [refresh]);

  const handleDelete =async(id) =>{
      setLoading(true)
      let res = await RemoveBook(id)
      setLoading(false)
      if(res['message'] === "success"){
          setRefresh(refresh+1)
          toast.success("Deleted Successfully")
      }
  }
    const seeDetails = (id) =>{
        navigate(`book-details/${id}`)
    }

    return (
        <section className={"p-5 "}>
            <h2 className={"lg:text-3xl  md:text-2xl text-xl font-bold uppercase my-8"}>Featured Books</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10"}>
             {
             books.slice(0,6).map((book,i) => <div key={i.toString()}>
               <div className={"bg-white flex flex-col gap-3 rounded-lg p-3"}>
                 <img className={"w-full rounded-lg h-60"} src={book['image']} alt={"book"} />
                 <div className={"flex flex-col gap-1 text-justify"}>
                 <h3 className={"text-md font-medium uppercase"}>{book['title']}</h3>
                 <h2 className={"lg:text-xl font-semibold text-gray-800"}> TK. {book['price']} </h2>
                 <p className={"text-blue-700"}> <span className={"text-gray-700"}>short des:</span> {book['shortDes']} </p>
                 <div className={"flex items-center gap-2 justify-evenly"}>
                     <Button className={"w-full"} variant="gradient">
                         <Link to={"/details?id=" + book['_id']}>See Details</Link>
                     </Button>
                     <Button onClick={()=>handleDelete(book['_id'])} color="red"> <RiDeleteBin2Fill size={18} /> </Button>
                 </div>
                 </div>

               </div>
             </div>
             )}
            </div>
            <Toaster position="bottom-center" reverseOrder={false} gutter={8} />
        </section>
    );
};

export default FeaturedBooks;