
import {Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex w-full flex-col flex-wrap items-center justify-center border-blue-gray-50 py-6
         bg-white gap-5 my-10 text-center">

            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography as="a" color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        <Link to={"/"}>about us</Link>
                    </Typography>

                </li>
                <li>
                    <Typography as="a" color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        <Link to={"/"}>terms and policy</Link>
                    </Typography>
                </li>
                <li>
                    <Typography as="a" color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        <Link to={"/"}>contribute</Link>
                    </Typography>
                </li>
                <li>
                    <Typography as="a" color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        <Link to={"/"}>contact us</Link>
                    </Typography>
                </li>
            </ul>
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Book Store
            </Typography>
        </footer>
    );
};

export default Footer;