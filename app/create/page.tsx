'use client'

import { Navbar } from "../components/Navbar";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "../components/Footer";

export default function CreatePage() {
    const [formData, setFormData] = useState({ name: "", characters: 0, story: 0, vibes: 0})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter()

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>
      ) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formData.name || !formData.characters || !formData.story || !formData.vibes) {
          setError("Please fill in all the fields");
          return;
        }
        formData.characters = Number(formData.characters)
        formData.story = Number(formData.story)
        formData.vibes = Number(formData.vibes)
        setError(null);
        setIsLoading(true);
    
        try {
          const response = await fetch("/api/media", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Failed to create Media");
          }
    
          router.push("/");
        } catch (error) {
          console.log(error);
          setError("Something went wrong. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
    return (
        <>
        <Navbar />
        <div className="grid gap-4 place-content-center">
        <h2 className="text-2xl font-bold my-8 m-4">New Media Entry</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-4 max-w-40">
            <input type="text" name="name" placeholder="Name" value={formData.name} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            Characters:<input type="number" min={1} max={5} name="characters" placeholder="Characters" value={formData.characters} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            Story:<input type="number" min={1} max={5} name="story" placeholder="Story" value={formData.story} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            Vibes:<input type="number" min={1} max={5} name="vibes" placeholder="Vibes" value={formData.vibes} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            <button className="bg-yellow-500 text-white mt-5 px-4 py-1 rounded-md cursor-pointer" type="submit" disabled={isLoading}>{isLoading ? "Adding..." : "Did You Like This?"}</button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        <Footer />
        </>
)}