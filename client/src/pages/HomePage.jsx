
import Banner from "../components/Banner.jsx";
import FeaturedBooks from "../components/FeaturedBooks.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
    return (
        <div className={"bg-[#F8F0F0]"}>
            <Banner />
            <FeaturedBooks />
            <Footer />
        </div>
    );
};

export default HomePage;