import React, { useEffect, useState } from "react";

import {Button, Input} from "@material-tailwind/react";

import {ListDataByKeyWord, ReadAllBook} from "../apiRequest/apiRequest.js";
import Books from "../components/Books.jsx";

const AllBookPage = () => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [items , setItems] = useState([]);

  const searchData = async() =>{
      let res = await ListDataByKeyWord(query);
      setQueryData(res);

  }

    useEffect(() => {
        (async()=>{
            let book = await ReadAllBook();
            if(query === ""){
                setItems(book)
            }else{
                setItems(queryData)
            }
        })()
    }, [query]);


  return (
  <section className={"px-5"}>

    <div className=" items-center gap-x-2 flex">

       <div className="relative flex w-full my-10  gap-2 md:w-max">

           <Input
             onChange={(e) => setQuery(e.target.value)} value={query}
             type="search" placeholder="Search By Keyword"
             className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
             labelProps={{ className: "before:content-none after:content-none"}} />

       <div className="!absolute left-3 top-[13px]">

           <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
           fill="#CFD8DC" />
           <path d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
           stroke="#CFD8DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>

         </div>

      <Button onClick={searchData} size="md"  className="rounded-lg ">Search</Button>
    </div>

     <div className={"grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1 my-5"}>
         {
           items.length > 0 ? items.map((item,i) => <Books key={i.toString()} item={item} />) : <h2 className={"text-red-700"}>No Available Book</h2>

         }
     </div>

  </section>
  );
};

export default AllBookPage;
