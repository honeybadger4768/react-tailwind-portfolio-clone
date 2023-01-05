import React from "react";

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
                <div className={"w-[60%] px-10 pt-5"}>
                    lorem ipsum dolor sit amet
                </div>
            </div>
        </div>
    )
}

export default Container