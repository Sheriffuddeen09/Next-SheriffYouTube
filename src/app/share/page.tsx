'use client'
import { RWebShare } from "react-web-share";

export default function Share(){

    
  const content = (
    <div>
        <RWebShare
            data={{
                text: "Web Share - GfG",
                url: "https://next-server-qb2r.onrender.com",
                title: "GfG",
            }}
            onClick={() => console.log("shared successfully!")}
        >
            <div className="mx-auto my-40 bg-white w-72 h-72 rounded-xl p-3">
                <div className="mt-20">
                <p className="text-black font-bold text-xl text-center">Click button to Share to </p>
                <p className="text-black font-bold text-xl text-center">Through different App</p>
            <button className={`flex flex-col items-center justify-center mx-auto cursor-pointer bg-filter w-14 rounded-full text-center flex flex-col items-center p-4 mt-3 `}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 scaleicon">
<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</button>
<p className="text-black font-bold text-xl text-center">Click</p>

</div>
</div>
        </RWebShare>
    </div>
);

return content
}