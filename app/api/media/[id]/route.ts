import client from "@/lib/appwrite_client";
import { Databases } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

// Fetch a specific interpretation

async function fetchMedia(id: string) {
    try {
        const aMedia = await database.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            "Media",
            id
        );
        return aMedia
    } catch (error) {
        console.error("Error fetching media", error);
        throw new Error("Failed to fetch media")
    }
}

// Delete a specific interpretation

async function deleteMedia(id: string) {
    try {
        const response = await database.deleteDocument( 
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            "Media",
            id)
    } catch (error) {
        console.error("Error deleting media", error);
        throw new Error("Failed to delete media")
    }
}

// Update a specific interpretation

async function updateMedia(id: string, data: {name: string, characters: number, story: number, vibes: number, score: number}) {
    try {
        const response = await database.updateDocument( 
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            "Media",
            id, 
            data)
    } catch (error) {
        console.error("Error updating media", error);
        throw new Error("Failed to update media")
    }
}

export async function GET(req: Request, 
    {params}: { params: { id: string }} 
    ) {
        try {
            const id = params.id;
            const aMedia = await fetchMedia(id);
            return NextResponse.json({aMedia})
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to fetch media" },
                { status: 500 }
            )
        }
    }

export async function DELETE(req: Request, 
    {params}: { params: { id: string }} 
    ) {
        try {
            const id = params.id;
            await deleteMedia(id);
            return NextResponse.json({message: "Media deleted"})
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to delete Media" },
                { status: 500 }
            )
        }
    }

export async function PUT(req: Request, 
        {params}: { params: { id: string }} 
        ) {
            try {
                const id = params.id;
                const aMedia = await req.json();
                await updateMedia(id, aMedia);
                return NextResponse.json({message: "Media updated"})
            } catch (error) {
                return NextResponse.json(
                    { error: "Failed to updated media" },
                    { status: 500 }
                )
            }
        }