import Link from "next/link"

export default function notFound() {
  return (
   <main>
    <h1>
        Posts is not Available!
    </h1>

    <p>
        <Link href='/users'>Back to Homepage</Link>
      </p>
   </main>
  )
}
