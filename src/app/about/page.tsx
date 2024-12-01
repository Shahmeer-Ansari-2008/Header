import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
   <div className="main bg-cover bg-center h-[800px] block bg-pink-400">
    <nav className="bg-black h-[80px] w-[100%]">
    <label className= "text-pink-600 text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px]" id="logo">HEADER</label>

     
      <ul className="flex justify-end mr-[20px] left-[-100%] text-center">
        <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
        <Link className="text-pink-600 text-base py-2 px-3.5 rounded-sm uppercase text-[16px] hover:bg-pink-600  hover:text-black" href="/">
  Home
</Link>
        </li>
        <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
          <Link className="text-pink-600 text-base py-2 px-3.5 rounded-sm uppercase text-[16px] hover:bg-pink-600  hover:text-black active: text-[20px] underline"rel="stylesheet" href="/about">
          About
          </Link>
        </li>

      </ul>
    </nav>
    
   
            <img className="w-[600px] h-[600px] rounded-full " src="image\pro.jpg" alt="programmer" />
       <div className="ml-[20%]"> 
        <h1 className="text-center text-black text-[50px] mt-[-500px] underline font-serif">
         About
    </h1>
    <p className="text-center text-[30px]">
      AssalamOAlaikum!<br />
      My name is "Shahmeer Ahmed". <br />
      I am a student of "GIAIC".<br />
      I am learning about "Web development". <br />
      My coding journey was start on 2024. <br />
      I didn't know about coding before "GIAIC". <br />
      But now I am better than before.

     
        </p>
        </div>
    </div>
    
  </div>
  )
}