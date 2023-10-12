import React from "react";
import Schedule from "./Schedule";
import './index.css'


export default function ChooseDate ({placeholder1, type1 = "date"})  {
    return (
    <>
        <div className="space-y-3">

            <div>일정 선택</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input placeholder={placeholder1} type={type1} className="border p-2" />
            </div>
            <Schedule />
        </div>
           
    </>
    )
}