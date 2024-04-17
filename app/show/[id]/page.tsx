import { Navbar } from "@/app/components/Navbar"

export default function ShowPage() {
    return(
    <>
    <Navbar />
    <div>
        <h2 className="text-2xl font-bold my-8">Show Media Entry</h2>

        <form className="flex flex-col gap-3 max-w-400">
            <input type="text" name="name" placeholder="Name" className="py-1 px-4 border rounded-md" />
            <input type="number" min={1} max={5} name="characters" placeholder="Characters" className="py-1 px-4 border rounded-md" />
            <input type="number" min={1} max={5} name="story" placeholder="Story" className="py-1 px-4 border rounded-md" />
            <input type="number" min={1} max={5} name="vibe" placeholder="Vibe" className="py-1 px-4 border rounded-md" />
        </form>
        </div>
    </>
)}