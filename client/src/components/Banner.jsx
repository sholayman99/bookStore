import React from 'react';
import banner from "../assets/images/home-banner.png"
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
             <button className={"bg-black rounded-lg text-white w-[45%] lg:py-3 md:py-2 py-1 "}>See More</button>
         </div>

        <img src={banner} className={"lg:max-w-md max-w-full"} alt={"img"} />
        </section>
    );
};

export default Banner;