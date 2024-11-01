import Link from "next/link";

export default function Footer(){

    return (
        <section className="fixed bottom-0 bg-black w-full">
             <div className="bg-black items-center flex-row flex gap-10  mx-auto w-full translate-x-4">
                <Link href={'/'} className="text-white my-6 text-font  "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
Home</Link>
                <Link href={'/shortpage'}><p className="text-white my-6 flex-col text-font items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
Shorts</p></Link>
<Link href={'/subscribe'}>
                <p className="text-white my-6 flex-col text-font items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 border ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
Subscriptions</p>
</Link>
<Link href={'/you'}>
<div className="text-white -translate-y-2 flex-col text-font items-center flex">
<p className="rounded-full w-10 p-2 font-bold bg-purple-400 text-center">O</p>
<p>You</p></div>
</Link>
                </div>
        </section>
    )
}