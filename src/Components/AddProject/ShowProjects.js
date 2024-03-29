import { useEffect , useState , useContext} from 'react';
import { collection, getDocs , query , where  } from "firebase/firestore";
import { db } from "../../Firebase";
import { AuthContext } from '../../Context/AuthContext';
import { ProjectRow } from './ProjectRow';

export  function ShowProjects(){
    const [projects, setProjects] = useState([])
    const {currentUser} = useContext(AuthContext);
    useEffect(() => {
        const getProjects = async() => {
          const list = await getDocs(query(collection(db , "Projects"),where("uid","==",currentUser.uid)));
          setProjects(list.docs.map( (doc) => ({id:doc.id , ...doc.data()}) ));
        }
        getProjects();
    },[])
    
    return(
        <>
        <div className="flex flex-wrap  mx-auto px-4 sm:px-8 max-w-3xl md:w-3/5">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Title
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Desc
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        DemoLink
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        status
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.map((project) => <ProjectRow Title={project.Title} id={project.id} Demo={project.Demo} Link={project.Link} Desc={project.Link}/>)
                                }
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>

        </>
    )};