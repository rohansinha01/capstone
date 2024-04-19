"use client"

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Link from "next/link";

interface MMedia {
  $id: string;
  name: string;
  characters: number;
  story: number;
  vibes: number;
}


export default function Home() {
  const [media, setMedia] = useState<MMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMedia = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/media');
        if(!response.ok) {
          throw new Error("Failed to fetch media")
        }
            const data = await response.json();
            setMedia(data)
      } catch (error) {
        console.log("Error: ", error);
        setError("Failed to load media. Please try reloading the page")
      } finally {
        setIsLoading(false);
      }
    }

    fetchMedia()
    }, [])

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/media/${id}`, { method: "DELETE"});
      setMedia((prevMedia) =>
      prevMedia?.filter((i) => i.$id !== id)
      )
    } catch (error) {
      setError("Failed to delete media. Please try again.")
    }
  }

  return (
    <>
    <Navbar />
    {error && <p className="py-4 text-red-500">{error}</p>}
    {isLoading ? (
    <p>Loading Media...</p>
    ) : media.length > 0 ? (
      <div className="mx-16">
        <div >
      {
        media?.map(aMedia => (
          <>
          <div 
          key={aMedia.$id}
          className="p-4 my-2 rounded-md border-b leading-8">
             <div  className="font-bold">{aMedia.name}</div>
             <div>{aMedia.characters + aMedia.story + aMedia.vibes}</div>
    </div>
    <div className="flex gap-4 mt-4 justify-start">
    <Link className="bg-green-400 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" href={`/show/${aMedia.$id}`}>show</Link>
      <Link className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" href={`/edit${aMedia.$id}`}>Edit</Link>
      <button 
      onClick={() => handleDelete(aMedia.$id)}
      className="bg-red-500 px-4 py-2 text-white rounded-md uppercase text-sm font-bold tracking-widest">
      Delete
      </button>
            </div>
            </>
        )) 
      }
     
    </div>
    </div>
    ) :(
      <p>No Media Found</p>
    )
    }
  </>  
  );
}
