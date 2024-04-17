import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client)

// Create
async function createMedia(data: {
    name: string; 
    characters: number;
    story: number; 
    vibes: number;
}) {
    try {
        const response = await database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, 
        "Media", 
        ID.unique(), 
        data
        );

        return response;
    } catch (error) {
        console.error('Error creating media', error);
        throw new Error("Failed to create media")
    }
}

// Fetch Media
async function fetchMedia() {
    try {
        const response = await database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, 
        "Media", 
        [Query.orderDesc("$createdAt")]
        );

        return response.documents;
    } catch (error) {
        console.error('Error fetching media', error);
        throw new Error("Failed to fetch media")
    }
}

export async function POST(req: Request) {
    try {
        const {name, characters, story, vibes} = await req.json();
        const data = {name, characters, story, vibes};
        const response = await createMedia(data);
        return NextResponse.json({message: "Media created"});
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create media",
        },
        {status: 500}
        );
    }
}

export async function GET() {
    try {
        const media = await fetchMedia();
        return NextResponse.json(media);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch media" },
            { status: 501 }
        );
    }
}