import React from 'react'

import PImage from "../../assets/Rectangle 4372.png"
import Medal from "../../assets/medal.png"
import "./platform.css"

const Platform = () => {
  return (
    <div className="w-[100%] h-[100%] mb-48 overflow-hidden">
        <div className="platform w-[100%] h-[100%] py-40 flex flex-col  ">

            {/* <div className=" w-[100%] h-[100%] flex flex-row justify-center items-center bg-purple-400 ">
                <div className="w-[50%] flex  platform-image" >image</div>
            </div> */}

            {/* <div className="absolute w-[100%] h-[50%] -mt-[200px] flex  justify-center items-center ">
                <div className="bg-black absolute z-50 "></div>
                <img src={PImage} className="z-30 absolute w-[400px] h-auto object-contain "  />
                <div className="z-40 relative w-[10%] flex flex-col text-white ">
                    <h1>Push your product to next level.</h1>
                    <p>End-to-end payments and financial management in a single solution. Meet the 
                        right platform to help you realize. 
                    </p>
                    <button className=" bg-orange-300 ">Get Started</button>
                </div>
            </div> */}
                

            <div className="py-6 w-[100%] h-[100%] flex flex-col content-center items-center justify-center">
                <h1 className="text-3xl font-semibold mb-2 ">We help your business grow faster</h1>
                <div classname="w-[40%] flex justify-center ">
                    <p className="w-[100%] text-base text-gray-400 flex justify-center items-center content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className=" w-[100%] h-[100%] px-12 py-12 flex flex-row flex-wrap justify-between gap-4 ">
                <div className="w-[300px] py-6 px-4 rounded-[10px] bg-white ">
                    <div><img src={Medal} className="object-fit" /></div>
                    <h1 className="my-4 text-base font-semibold ">Offending belonging</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>

                <div className="w-[300px] py-6 px-4 rounded-[10px] bg-white ">
                    <div><img src={Medal} className="object-fit" /></div>
                    <h1 className="my-4 text-base font-semibold ">Offending belonging</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>

                <div className="w-[300px] py-6 px-4 rounded-[10px] bg-white ">
                    <div><img src={Medal} className="object-fit" /></div>
                    <h1 className="my-4 text-base font-semibold ">Offending belonging</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </div>

            <div className="w-[100%] h-full my-12 flex justify-center items-center">
                <div className="w-[20%] py-4 rounded-[15px] flex flex-row justify-center content-center text-white bg-orange-600 ">More About Platform</div>
            </div>
        </div>
    </div>
  )
}

export default Platform