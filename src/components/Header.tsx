import { routes } from "global";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header : React.FC = () =>{

    const [active, setActive] = useState<number>(0);

    return (
        <div className={"flex fixed top-0 left-0 w-full h-32 bg-white justify-between px-12"}>
            <div className={"flex items-center"}>
                <div className={"w-5 h-5 bg-blue-my"} />
                <NavLink to={"/"} className={"text-2xl font-bold px-2"}>Furkan Çetinkaya </NavLink>
                <h5 className={"text-xl font-thin mt-3"}>/ Front End Developer</h5>
            </div>
            <div className={"flex items-center"}>
                {routes.map((route, i) =>(
                    <NavLink to={route.link} key={i} className={`mx-5 ${active === i ? "text-blue-my" : "text-gray-500"} hover:text-blue-my`} onClick={() =>{
                        setActive(i)
                    }}>
                        {route.text}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Header