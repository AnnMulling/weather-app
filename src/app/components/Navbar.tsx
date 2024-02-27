import React from 'react'
// icons
import { WiDayHaze } from "react-icons/wi";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import Input from "./Input";

type Props = {}

export default function Navbar (props: Props) {
    return (
        <div className="bg-white/25 w-full flex-col h-fit">
            {/* INPUT AND LOGO */}
            <div className="flex flex-col justify-between items-center p-12 md:flex-row">
                <div className="flex items-center justify-center gap-2 ">
                    <h1 className=" text-white text-xl  ">Weather App </h1>
                    <WiDayHaze className="text-5xl mt-1 text-yellow-300" />
                </div>
                {/*  */}
                <section className="flex gap-2 items-center text-white">
                    <CiLocationArrow1 className="text-2xl cursor-pointer"/>
                    <CiLocationOn className="text-2xl cursor-pointer"/>
                    <p className="text-sm">Chicago</p>
                    <Input />
                </section>
            </div>
            {/* {data.current ? (
  <div>{data.current.temp_f}</div>
  ): null} */}
        </div>
    )
}
