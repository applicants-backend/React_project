import React from "react";
import './index.css'

export default function Transportation() {
    return (
        <div className="mb-4">
            <fieldset className="border-2 border-solid border-white p-4">
            <legend className="text-white">시간</legend>  {/* Added text-white to make the legend text white */}
            <div className="space-y-2">  {/* Added space for visual enhancement */}
                <div className="text-white">교통수단 선택</div>
                <div>
                    <input type="radio" id="Train" name="Transportation" value="Train" />
                    <label htmlFor="Train" className="ml-2 text-white">Train</label> {/* Added margin and white text */}
                </div>

                <div>
                    <input type="radio" id="Bus" name="Transportation" value="Bus" />
                    <label htmlFor="Bus" className="ml-2 text-white">Bus</label> {/* Added margin and white text */}
                </div>
                <button className="bg-white text-black p-1.5 mt-4" type="button">제출하기</button>
                <div></div>
            </div>
                            

            <div className="border p-2 box-content h-40 w-auto ">
                Transportation(data) 코레일 및 버스 api 사용장소 {/* This can be another component depending on the structure */}
            </div>
            </fieldset>

            

           
        </div>
    );
}