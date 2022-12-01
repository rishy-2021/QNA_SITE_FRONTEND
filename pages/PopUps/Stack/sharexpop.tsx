import React,{useEffect,useRef, useState} from 'react'
import {FaFacebookF,FaTelegramPlane} from "react-icons/fa"
import {AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {GrAttachment} from "react-icons/gr"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Router } from 'react-router-dom'

interface shareprops{
  trigger: Boolean
setTrigger: React.Dispatch<React.SetStateAction<boolean>>

}
function Sharexpop({trigger,setTrigger}:shareprops) {
  const { asPath } = useRouter();
  const[copy,setcopy]=useState(false);
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';

  const Url = `${origin}${asPath}`;
const inputRef=useRef<any>(null);
  const whatsapapi=`https://wa.me/?text=${Url}`
  const twiiterapi=` https://twitter.com/intent/tweet?text=${Url}`
  const facebookapi=` https://twitter.com/intent/tweet?text=${Url}`
  const telegramapi=` https://t.me/share/url?url=${Url}`
  const instaapi=` https://twitter.com/intent/tweet?text=${Url}`
  function handleClick(){
    console.log("hii")
  console.log(Url);
  }
   //For PopUp to Close When ClickedOutside
   const shareRef=useRef<any>();
   useEffect(()=>{
     document.addEventListener("mousedown",(event)=>{
       if(!shareRef?.current?.contains(event.target)){
         setTrigger(false);
       }
      })
   })
   function handleClickInput(){
    const input=inputRef.current.select();
    navigator.clipboard.writeText(Url)
    setcopy(true);
    setTimeout(()=>{setcopy(false);
    window.getSelection().removeAllRanges();
  navigator.clipboard.writeText("")},5000)
    
    console.log(Url);
   }
  return  (trigger)?
    <main className="noscroll z-50 fixed inset-0 w-full flex justify-center items-center">
      <section className="flex bg-black w-full bg-opacity-20 justify-center items-center h-screen text-black">
    <div className="bg-white px-2 py-6 rounded-xl max-w-[500px] h-[300px] w-full " ref={shareRef}>
    <header>
    </header>
    <div className="mx-8 ">
      <div className='flex relative'>
      <p className='text-lg'>Share this link via</p>
      <div className='text-xl bg-gray-200 rounded-full w-8 h-8 px-[9px]   absolute right-0 -top-2 cursor-pointer' onClick={()=>setTrigger(false)}>&times;</div>
      </div>
      <ul className="gap-8 my-8 flex text-lg ">
      <Link href={facebookapi} ><FaFacebookF className='fill-[#1877F2] h-14 p-4 w-14 border  text-lg rounded-full hover:bg-[#1877F2] border-[#b7d4fb] transition transform 0.3s ease-in-out hover:fill-white' onClick={handleClick}/></Link>
        <Link href={instaapi}  ><AiOutlineInstagram  className='fill-[#e1306c] border-[#be67fc] h-14 p-4 w-14 border  text-lg rounded-full  hover:bg-[#e1306c] hover:fill-white'/></Link>
        <Link href={twiiterapi} ><BsTwitter  className='fill-[#46C1F6] border-[#f5bccf]  h-14 p-4 w-14 border  text-lg rounded-full hover:bg-[#46C1F6] hover:fill-white'/></Link>
        <Link href={whatsapapi} ><AiOutlineWhatsApp  className='fill-[#25D366] border-[#bef4d2] h-14 p-4 w-14 border  text-lg rounded-full hover:bg-[#25D366] hover:fill-white'/></Link>
        <Link href={telegramapi} ><FaTelegramPlane  className='fill-[#0088cc] border-[#b3e6ff] h-14 p-4 w-14 border  text-lg rounded-full hover:bg-[#0088cc] hover:fill-white'/></Link>
        
     
      </ul>
      <p className='text-lg'>Or Copy link</p>
      <div className="flex  gap-8 md:gap-12 h-16 mt-4 w-full border border-[#e1e1e1] rounded-md py-4 focus:border-[#7d2ae8] ">
       <GrAttachment size={25} className="ml-2 w-[5%]"/>
        <input type="text" ref={inputRef}  value={Url} className='w-full text-sm h-full border-none focus:outline-none '/>
        <button className='bg-[#7d2ae8] text-white hover:bg-[#8d39fa] px-4 h-fit w-fit py-3 -mt-3 text-lg mr-4 text-center ' onClick={()=>handleClickInput()}><p className={`${copy?"hidden":""}`}>Copy</p><p className={`${copy?"":"hidden"}`}>Copied!</p></button>
      </div>
    </div>
  </div>
  </section>
  </main>
  :null
}

export default Sharexpop