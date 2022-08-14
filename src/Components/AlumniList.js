import AlumniCard from "./AlumniCard"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
export default function AlumniList() {
  // Checking if the content is loading
  const [loading, setloading] = useState(false);
  // Store Firbase Data
  const [alumni , setAlumni] = useState([]);
  //
  const [name, setName] = useState("");
  // Show data to the user
  const [show, setshow] = useState([]);
  const [dropdown , setdropdown] = useState(false);
  const getAlumni = async() => {
    const list = await getDocs(collection(db , "Alumni"));
    setAlumni(list.docs.map( (doc) => ({id:doc.id , ...doc.data()}) ));
    setloading(true);
  }
  useEffect(() => {
    getAlumni()
  }, [])

  useEffect(() => {
    setshow(alumni);
    setloading(false);
    console.log("1")
  },[loading]);

  const HandleFilter = (e) => {
    setshow(alumni.filter( x => x.Department.includes(e.target.value)));
  }
  const handleClick = (e) =>{
      e.preventDefault();
      setshow(alumni.filter( x => x.Name.includes(name)));
  }
    return(
        <>

        <div className="bg-white">  
          <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Our Alumni</h1>
                
                {/* <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p> */}

        <div className="w-full flex justify-evenly">

        <div className="relative w-3/5 flex m-5">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Name..." required onChange={(e)=>setName(e.target.value)}/>
        <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={(e) =>handleClick(e)}>Search</button>
    </div>
        <div className="flex">
          
        <div className="dropdown  inline-block relative m-5">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:bg-blue-400 hover:text-white" onClick={() => setdropdown(!dropdown)}>
            <span className="mr-1">Department</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          { dropdown &&

<ul className="dropdown-menu absolute  text-gray-700 pt-1 z-10 w-full">
              
              <button className ="rounded bg-gray-200 hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap w-full" value="AIML" onClick ={(e) =>HandleFilter(e)}>AIML</button>
              <button className ="rounded bg-gray-200 hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap w-full" value="CSE" onClick ={(e) =>HandleFilter(e)}>CSE</button>
              <button className ="rounded bg-gray-200 hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap w-full" value="ISE" onClick ={(e) =>HandleFilter(e)}>ISE</button>
              <button className ="rounded bg-gray-200 hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap w-full" value="Clear" onClick ={(e) =>setshow(alumni)}>Clear</button>
          </ul>
          }
        
        </div>
        </div>
          </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {
            loading ?
            ( <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div> ) :
            (show.map((a)=><AlumniCard Name={a.Name} Designation={a.Department} Company={a.Domain} Github={a.Github} Linkedin={a.LinkedIn} Twitter={a.Twitter} ImageURL={a.imageURL}/>))
          }
        </div>
        </div>
        </div>

        </>
    );
};