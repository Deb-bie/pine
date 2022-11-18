import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"


const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    const handleMobile = () => {
        setMobile(!mobile)
    }


  return (
    <div className="w-[100%] h-[80px] overflow-x-hidden  " >
        <div className="w-[100%] h-[100%] 4xs:px-4 xl:px-32 py-8 flex flex-row justify-between content-center items-center">
            
            <div className="w-[20%] text-3xl font-bold" >pine</div>

            <div className="w-[40%] text-base 4xs:hidden sm:flex flex-row justify-between content-center items-center ">
                <div>Products</div>

                <div>Templates</div>

                <div>Pricing</div>

                <div>Blog</div>
            </div>

            <div className="w-[25%] lg:w-[20%] text-base 4xs:hidden sm:flex flex-row justify-between   ">
                <button>Sign In</button>

                <button className="px-2 lg:px-4 py-2 bg-red-400 rounded-[10px] ">Get Started</button>
            </div>

            <div onClick={()=>handleMobile()} className="4xs:flex sm:hidden  ">
                {
                    (mobile) ? <MdClose className="z-20 absolute 4xs:left-0 xs:left-[70%] top-0 mt-4 ml-4" /> : <FaBars />
                }
            </div>

            {
                (mobile) ? 
                    
                    <div className="absolute 4xs:w-[100%] xs:w-[30%] h-[100%] right-0 top-0 shadow-xl bg-white ">
                        <div className="h-[100%] flex flex-col content-center items-center">
                            <div className="w-[70%] h-[30vh] my-12 flex flex-col justify-between items-center content-center border-[1px] border-x-transparent border-t-transparent ">
                                <div>Products</div>
                                <div>Templates</div>
                                <div>Pricing</div>
                                <div className="mb-4">Blog</div>
                            </div>

                            <div className="h-[20vh] flex flex-col justify-between items-center content-center">
                                <button>Sign In</button>
                                <button className="px-2 lg:px-4 py-2 bg-red-400 rounded-[10px] ">Get Started</button>
                            </div>
                        </div>
                    </div>


                : ""
            }


        </div>
    </div>
  )
}

export default Navbar