'use client'

import { Navbar } from "../components/Navbar";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePage() {
    const [formData, setFormData] = useState({ name: "", characters: "", story: "", vibes: ""})
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
        <div>
        <h2 className="text-2xl font-bold my-8">New Media Entry</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-400">
            <input type="text" name="name" placeholder="Name" value={formData.name} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            <input type="number" min={1} max={5} name="characters" placeholder="Characters" value={formData.characters} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            <input type="number" min={1} max={5} name="story" placeholder="Story" value={formData.story} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            <input type="number" min={1} max={5} name="vibes" placeholder="Vibes" value={formData.vibes} className="py-1 px-4 border rounded-md" onChange={handleInputChange}/>
            <button className="bg-yellow-500 text-white mt-5 px-4 py-1 rounded-md cursor-pointer" type="submit" disabled={isLoading}>{isLoading ? "Adding..." : "Did You Like This?"}</button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        </>
)}