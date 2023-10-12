import React from "react";
import './index.css'

export default function Departer({placeholder1, type1 = "text" }) {
    return (
        <>
            <div>출발지</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
            <input placeholder={placeholder1} type={type1} className="border p-2" />
            </div>
        </>
        
    );
}