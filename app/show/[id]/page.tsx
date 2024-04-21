// import client from "@/lib/appwrite_client";

// import { NextResponse } from "next/server";
// import { Databases } from "appwrite";

// const database = new Databases(client);
// export default function ShowPage() {
// async function fetchMedia(id: string) {
//     try {
//         const aMedia = await database.getDocument(
//             process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
//             "Media",
//             id
//         );
//         return aMedia
        
//     } catch (error) {
//         console.error("Error fetching media", error);
//         throw new Error("Failed to fetch media")
//     }
// }

// async function GET(req: Request, 
//     {params}: { params: { id: string }} 
//     ) {
//         try {
//             const id = params.id;
//             const aMedia = await fetchMedia(id);
//             return NextResponse.json({aMedia})
//         } catch (error) {
//             return NextResponse.json(
//                 { error: "Failed to fetch media" },
//                 { status: 500 }
//             )
//         }
//     }

// return (
//     <>
//     <h1>
//     {aMedia.$id}
//     </h1>
//     </>
// )
// }
