import React from 'react';
import Departer from './Departer';
import Transportation from './Transportation';
import Destination from './Destination';
import ChooseDate from './ChooseDate';
import ArriveAt from './ArriveAt';
import RecommandPlace from './RecommandPlace';
import RouteDetails from './RouteDetails';
// import './index.css'

export default function MainContent() {
    return (
        <div className="flex spcea-x-3 text-white bg-zinc-900">

            {/* Left Section - Placeholder */}
            <div className="w-2/5 bg-zinc-900 p-4">
                Left Content (Placeholder)
            </div>

            {/* Middle Section */}
            <div className="w-3/10 p-4 flex flex-col space-y-4">
                <div className="p-4 flex spcea-x-2">
                    <div>
                        <Departer placeholder1="Departure" />
                        <Destination placeholder1="Destination" />
                    </div>
                        <ChooseDate />
                </div>
                <Transportation />
                <div className="p-4 flex spcea-x-2">
                    <ArriveAt placeholder1="ArriveAt" />  
                    <Destination className="flex-col" placeholder1="Departure" />
                </div>
                <RouteDetails />
                <RecommandPlace />
            </div>

            {/* Right Section - Placeholder */}
            <div className="w-2/5 bg-zinc-900 p-4 ">
                Right Content (Placeholder)
            </div>

        </div>
    );
}
