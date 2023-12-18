import React from 'react';
import Banner from "../components/Banner.jsx";
import FeaturedBooks from "../components/FeaturedBooks.jsx";

const HomePage = () => {
    return (
        <div className={"bg-[#F8F0F0]"}>
           <Banner />
            <FeaturedBooks />
        </div>
    );
};

export default HomePage;