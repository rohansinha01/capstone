"use client";
import { Navbar } from "@/app/components/Navbar"; 
import { use, useEffect, useState } from "react";

export default function ShowPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({ name: "", characters: "", story: "", vibes: "", score: "" });
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/media/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch media");
        }

        const data = await response.json();
        // console.log(data);
        const score = data.aMedia.characters + data.aMedia.story + data.aMedia.vibes
        console.log(score)
        
        setFormData({
          name: data.aMedia.name,
          characters: data.aMedia.characters,
          story: data.aMedia.story,
          vibes: data.aMedia.vibes,
          score: data.aMedia.characters + data.aMedia.story + data.aMedia.vibes,
        });
      } catch (error) {
        setError("Failed to load media.");
      }
      
    };





    fetchData();
  }, []);

  
  
  
  return (
    
    <>
    <Navbar />
    
        <div> 
        <h2 className="text-2xl font-bold my-8">New Media Entry</h2>
        <h1>Name: {formData.name}</h1>
        <h1>Characters: {formData.characters}</h1>
        <h1>Story: {formData.story}</h1>
        <h1>Vibes: {formData.vibes}</h1>
        <h2>Score: {formData.score}</h2>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        </>
  );
}