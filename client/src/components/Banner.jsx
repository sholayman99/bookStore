import React from 'react';
import banner from "../assets/images/home-banner.png"
import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
const Banner = () => {
    return (
        <section className={"flex lg:flex-row flex-col justify-evenly h-[50vh] md:h-[70vh] lg:h-[80vh]" +
            " items-start p-5 lg:items-center"}>
         <div className={"flex flex-col lg:gap-5 gap-3"}>
             <h3 className={"uppercase font-bold text-sm md:text-md lg:text-lg text-gray-400"}>The Bookworm Editors'</h3>
             <div>
                 <h1 className={"font-normal text-2xl md:text-3xl lg:text-4xl"}>Featured Book of the</h1>
                 <h1 className={"font-bold text-2xl md:text-5xl lg:text-5xl"}>Year</h1>
             </div>
             <Button className={"w-48"} variant="gradient">
               See More..
             </Button>
         </div>

        <img src={banner} className={"lg:max-w-md max-w-full"} alt={"img"} />
        </section>
    );
};

export default Banner;