import { Nav } from "../Components/Nav"
import { AddBlog } from "../Components/AddBlogs/AddBlog"
import { ShowBlogs } from "../Components/AddBlogs/ShowBlogs"
import { Footer } from "../Components/Footer"
export default function AddBlogPage(){
    return(
      <>
        <Nav/>
        <div className="container w-full flex flex-wrap">
        <AddBlog />
        <ShowBlogs />
        </div>
        <Footer />
      </>
    )
}