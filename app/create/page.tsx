import { Navbar } from "../components/Navbar";

export default function CreatePage() {
    return (
        <>
        <Navbar />
        <div>
        <h2 className="text-2xl font-bold my-8">New Media Entry</h2>

        <form className="flex flex-col gap-3 max-w-400">
            <input type="text" name="name" placeholder="Name" className="py-1 px-4 border rounded-md" />
            <input type="number" min={1} max={5} name="characters" placeholder="Characters" className="py-1 px-4 border rounded-md" />
            <input type="number" min={1} max={5} name="story" placeholder="Story" className="py-1 px-4 border rounded-md" />
            <input type="number" min={1} max={5} name="vibes" placeholder="Vibes" className="py-1 px-4 border rounded-md" />
            <button className="bg-yellow-500 text-white mt-5 px-4 py-1 rounded-md cursor-pointer">Did You Like This?</button>
        </form>
        </div>
        </>
)}