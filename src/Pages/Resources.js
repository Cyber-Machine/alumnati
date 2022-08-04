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
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {
            blog.map((b)=><BlogCard Title={b.Title} Desc={b.Desc} Tags={b.Tags}/>)
          }        
        </div>
        <Footer />
      </>
    )
}