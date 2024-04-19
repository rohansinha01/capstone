async function getPostById(postId: string) {
    const response = await fetch(`http://localhost:3000/api/media/${postId}`, {
        method: "GET",
    });

    return response.json()
}

export default async function PostID({ params }: any) {
    const post = await getPostById(params.id)

    return <main>post {params.id} </main>
}