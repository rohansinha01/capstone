
import { Navbar } from "./components/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="mx-16">
    <div className="p-4 my-2 rounded-md border-b leading-8">
      <div className="font-bold">Media - <span>I liked it!</span></div>
    </div>
    <div className="flex gap-4 mt-4 justify-start">
    <Link className="bg-green-400 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" href={'/show'}>show</Link>
      <Link className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" href={'/edit'}>Edit</Link>
      <button className="bg-red-500 px-4 py-2 text-white rounded-md uppercase text-sm font-bold tracking-widest">
      Delete
      </button>
    </div>
    </div>
  </>  
  );
}
