import { routes } from "global";
import React from "react";
import { NavLink } from "react-router-dom";

const Container : React.FC = () =>{

    return (
        <div className={"flex w-full h-[100vh] items-center justify-center"}>
            <div className={"bg-bej h-full w-[40%] absolute left-0 -z-10"} />
            <div className={"h-full w-[55%] absolute right-0 -z-10"} />
            <div className={"flex w-1/2 h-[60%]"}>
                <div className={"flex justify-center w-[40%] h-full bg-bej-light shadow-2xl"}>
                    <div className={"flex items-center flex-col"}>
                        <img src={"/logo512.png"} className={"w-1/2 h-1/2 object-contain"} />
                        <p className={"text-center font-bold text-2xl"}>
                            Furkan<br />Çetinkaya
                        </p>
                        <hr className={"w-[10%] h-[0.19rem] bg-blue-my my-5"} />
                        <p className={"text-2xl font-thin"}>
                            Front End Developer
                        </p>
                        <div className={"w-full h-10 bg-white mt-auto"}>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col w-[60%] px-10 pt-5"}>
                    <h1 className={"text-[100px] font-bold"}>Hello</h1>
                    <p className={"text-2xl"}>
                        Here's who I am & what I do
                    </p>
                    <div className={"flex justify-between items-center w-1/2 my-10"}>
                        <NavLink to={"/resume"} className={"bg-blue-my border-2 border-blue-my text-white font-bold px-6 py-1 rounded-3xl hover:bg-white hover:border-blue-my hover:text-blue-my duration-500"}>
                                RESUME
                        </NavLink>
                        <NavLink to={"/projects"} className={"bg-white border-2 text-black border-black hover:bg-blue-my hover:text-white hover:border-blue-my px-6 py-1 rounded-3xl duration-500"}>
                                PROJECTS
                        </NavLink>
                    </div>
                    <div>
                        <p className={"text-lg font-light"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Morbi enim leo, lobortis vitae consectetur at, sodales nec ligula. In sollicitudin urna ac magna faucibus pulvinar.
                         Integer ut iaculis elit, non tristique justo. Cras luctus nec est sollicitudin suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container