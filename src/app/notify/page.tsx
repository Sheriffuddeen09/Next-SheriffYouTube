'use client'
import { useEffect, useState } from "react";
import PostList from "./PostList";
import Navbar from "../homepage/components/Navbar";
import Footer from "../homepage/components/Footer";

export default function Notify(){
const [data, setData] = useState([]); // based on your data you should store it here in state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://next-server-qb2r.onrender.com/notify");
        const result = await response.json() 
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const content = (
    <div>
       {
            data.map((post: Posts) =>(
                <PostList key={post.id} {...post}/>
            ))
        }
    </div>
  )

  return (
    <div>
        <Navbar />
        {content}
        <Footer />
    </div>
  )
}