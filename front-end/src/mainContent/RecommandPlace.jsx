import React from "react";
import PlaceDetail from "./PlaceDetail";
import './index.css'

export default function RecommandPlace () {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold">Recommend Place</h2>
            <div className="border p-2 mt-2">
                <PlaceDetail />
            </div>
        </div>
    )
}
