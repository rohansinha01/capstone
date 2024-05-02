import Link from "next/link";

export const Footer = () => {
    return (
        <>
       
        <div className="p-12 m-6 gap-2">
        <Link
                    className="bg-blue-200 px-4 py-2 rounded-md uppercase text-sm font-bold align-center"
                    href={`/create`}
                  >
                    Add New Entry
                  </Link>
        <div><br /></div>
        <h1>Rating Reminder:</h1>
        <h3>3-7: I DID NOT LIKE THAT!</h3>
        <h3>8-12: I LIKED THAT!</h3>
        <h3>13-15: I LOVED THAT!</h3>
        </div>
        </>
    )

}