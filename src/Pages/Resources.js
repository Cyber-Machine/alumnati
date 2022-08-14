import { Nav } from "../Components/Nav"
import { Footer } from "../Components/Footer"
import { BlogHeader } from "../Components/BlogHeader"
import { BlogCard } from "../Components/BlogCard"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Resources(){
  const [blog, setBlog] = useState([]);
  const [showBlog, setShowBlog] = useState([]);
  const [option, setOption] = useState(true);
  const getBlog = async() => {
    const list = await getDocs(collection(db , "Blog"));
    setBlog(list.docs.map( (doc) => ({id:doc.id , ...doc.data()}) ));
    setShowBlog(blog);
  }
  useEffect(() => {
    getBlog();
    console.log(showBlog);
  },[])
 
  
  return(
      <>
        <Nav/>
        <BlogHeader/>
        <div className="container w-full md:flex md:flex-wrap">
        <div className="md:w-1/6 items-center sm:w-full">
          <div className="flex flex-col items-center m-3 space-y-3">
            <h4 className="text-blue-500 font-semibold m-1 tracking-wide subpixel-antialiased uppercase">Options</h4>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-20 disabled:opacity-60" disabled={option} onClick={()=>setOption(!option)}>Blogs</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-xl w-20 disabled:opacity-60" disabled={!option} onClick={()=>setOption(!option)}>Project</button>
          </div>
        </div>
        <div className="md:w-5/6 sm:w-full grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {
            (option&&
            blog.map((b)=><BlogCard Title={b.Title} Desc={b.Desc} Tags={b.Tags} Link={b.Link}/>) ) || <p>Projects</p>
          }        
        </div>
        </div>
        <Footer />
      </>
    )
}