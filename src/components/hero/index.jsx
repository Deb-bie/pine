import React from 'react'

import HeroImage from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className=" w-[100%] h-[100%] overflow-hidden " >
        <div className="w-[100%] h-[100%] gap-6 4xs:mt-0 sm:mt-12 4xs:px-2 md:pl-12 xl:pl-32 flex 4xs:flex-col-reverse sm:flex-row justify-between  ">

            <div className=" 4xs:w-[100%] 4xs:justify-center sm:justify-start items-center sm:w-[40%] flex flex-col  ">
                <div className="4xs:w-[90%] sm:w-[100%] flex flex-col justify-center  ">
                    <h3 className="mb-4 text-base font-semibold  ">Product Growth Solution in Single Platform.</h3>
                    <h1 className="mb-4 text-4xl font-bold flex flex-wrap ">Managing business payments has never been easier</h1>
                    <p className="mb-4 text-base text-gray-300" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nobis optio, ullam
                    </p>

                    <div className=" mb-12 py-4 px-4 bg-white shadow-2xl text-base ">
                        <form className="w-[100%] h-[100%] gap-4 flex flex-wrap flex-row justify-between ">
                            <div className="w-[65%] flex flex-col ">
                                <label className="text-[15px] text-gray-300 ">Register using an email addres</label>
                                <input 
                                    type="email" 
                                    placeholder="eg. johdoe.gmail.com"
                                    className="px-4 py-2 text-base outline-none border-[1px]  "
                                />
                            </div>

                            <div className="w-[25%] flex flex-col items-center ">
                                <div className="w-[100%] h-[100%] flex flex-col justify-center content-center ">
                                    <button className="w-[100%] h-[80%] flex flex-col justify-center content-center items-center bg-black text-white ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="4xs:w-[100%] sm:w-[60%] flex flex-row justify-between  ">
                        <span>
                            Free Register
                        </span>

                        <span>Great Service</span>

                    </div>
                </div>
            </div>

            <div className="4xs:w-[100%] sm:w-[55%] h-[50%] flex 4xs:justify-center sm:justify-start   ">
                <div className="4xs:w-[80%] sm:w-[100%] flex 4xs:justify-center sm:justify-start  h-[50%] ">
                    <img src={HeroImage} alt="hero" className="object-contain" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;