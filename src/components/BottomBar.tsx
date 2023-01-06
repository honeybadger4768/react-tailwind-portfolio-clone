import React from "react";

const BottomBar : React.FC = () =>{
    return (
        <div className={"flex justify-between items-center w-full h-[10vh] bg-white px-12"}>
            <div>
                <p className={"text-sm font-light"}>
                    © 2023 by Furkan CETINKAYA.
                </p>
            </div>
            <div className={"flex justify-between text-sm"}>
                <div className={"px-8"}>
                    <p className={"font-medium text-center"}>Call</p>
                    <p className={"font-light"}>+90000000</p>
                </div>
                <div className={"px-8"}>
                    <p className={"font-medium text-center"}>Write</p>
                    <p className="font-light">furkan@webmaster.domain</p>
                </div>
                <div className={"px-8"}>
                    <p className={"font-medium text-center"}>Follow</p>
                    <div className={"flex justify-between"}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar