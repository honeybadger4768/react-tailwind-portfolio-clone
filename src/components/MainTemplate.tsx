import React from "react";
import Header from "./Header";
import BottomBar from "./BottomBar";
import { Outlet } from "react-router-dom";

const MainTemplate = () =>{
    return (
        <div className="w-full h-screen pt-32">
            <Header />
            <Outlet />
            <BottomBar />
      </div>
    )
}

export default MainTemplate