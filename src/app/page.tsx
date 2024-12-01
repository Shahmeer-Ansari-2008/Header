import Link from "next/link"

export default function Home() {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
   <div className="main bg-cover bg-center h-[800px] block">
    <nav className="bg-black h-[80px] w-[100%]">
    <label className= "text-pink-600 text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px] ">HEADER</label>

     
      <ul className="flex justify-end mr-[20px] left-[-100%] text-center">
        <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
        <Link className="text-pink-600 text-base py-2 px-3.5 rounded-sm uppercase text-[16px] hover:bg-pink-600  hover:text-black active: text-[20px] underline" href="/">
  Home
</Link>
        </li>
        <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
          <Link className="text-pink-600 text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-pink-600 hover:text-black"rel="stylesheet" href="/about">
          About
          </Link>
        </li>
      </ul>
    </nav>
    <img className="h-[screen]" src="image\laptop.png" alt="laptop" />
    </div>
  </div>
  )
}