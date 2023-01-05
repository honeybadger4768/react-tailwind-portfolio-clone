import React, { useState } from "react";

const routes = [
    {
        link: "about-me",
        text: "About Me"
    }, {
        link: "resume",
        text: "Resume"
    }, {
        link: "projects",
        text: "Projects"
    }, {
        link: "contact",
        text: "Contact"
    }
]

const Header : React.FC = () =>{

    const [active, setActive] = useState<number>(0);

    return (
        <div className={"flex fixed top-0 left-0 w-full h-32 bg-white justify-between px-32 shadow2"}>
            <div className={"flex items-center"}>
                <div className={"w-5 h-5 bg-blue-my"} />
                <h1 className={"text-2xl font-bold px-2"}>Furkan Çetinkaya </h1>
                <h5 className={"text-xl font-thin mt-3"}>/ Front End Developer</h5>
            </div>
            <div className={"flex items-center"}>
                {routes.map((route, i) =>(
                    <span className={`mx-5 ${active === i ? "text-blue-my" : "text-gray-500"} hover:text-blue-my`} onClick={() =>{
                        setActive(i)
                    }}>
                        {route.text}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Header