import Link from "next/link";

export default function SideHomepage(){

    return (
        <section className="fixed mt-20 -ml-4">
             <div className="bg-transparent ">
                <Link href={'/'} className="text-white my-6 text-font items-center flex-col flex rounded-2xl p-2 transition-all duration-500 ease-in-out hover:bg-[#1a222f]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

Home</Link>
                <Link href={'/shortpage'}><p className="text-white my-6 flex-col rounded-2xl p-2 transition-all duration-500 ease-in-out hover:bg-[#1a222f] text-font items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
Shorts</p></Link>
<Link href={'/subscribe'}>
                <p className="text-white my-6 rounded-2xl p-2 transition-all duration-500 ease-in-out hover:bg-[#1a222f] flex-col text-font items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 border ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
Subscriptions</p>
</Link>
<Link href={'/you'}>
<p className="text-white my-6 flex-col text-font items-center flex rounded-2xl p-2 transition-all duration-500 ease-in-out hover:bg-[#1a222f]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>

You</p>
</Link>
                </div>
        </section>
    )
}