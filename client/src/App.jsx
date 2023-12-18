import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BookDetailsPage from "./pages/BookDetailsPage.jsx";
import AppNavbar from "./components/AppNavbar.jsx";
import AllBookPage from "./pages/AllBookPage.jsx";
import CreateBookPage from "./pages/CreateBookPage.jsx";

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto "}>
           <BrowserRouter>
               <AppNavbar />
               <Routes>
                   <Route path={"/"} element={ <HomePage /> } />
                   <Route path={"/details"} element={ <BookDetailsPage /> } />
                   <Route path={"/all-books"} element={ <AllBookPage /> } />
                   <Route path={"/add-book"} element={ <CreateBookPage /> } />
               </Routes>
           </BrowserRouter>
        </main>
    );
};

export default App;