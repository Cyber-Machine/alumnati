import { useEffect , useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { db } from "../../Firebase";
import { addDoc , collection } from "firebase/firestore";
export  function AddProject(){
    const {currentUser} = useContext(AuthContext);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [demo, setDemo] = useState("")
    const [link, setLink] = useState("")
    const addProject = async () => {
        try {
            await addDoc(collection(db,"Projects"),{Desc:desc , Title:name , Demo:demo ,uid:currentUser.uid , Link:link});
            alert("Project Added successful");
        } catch (error) {
            alert(error);
        }
    };
    const handleSubmit = event => {
		event.preventDefault();
		 addProject();
	  };
    return(
        <>

        <div className='md:w-1/5 flex flex-wrap items-center mx-auto my-6'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div class="mb-6">
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " required onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div class="mb-6">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
            <input type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500   " required onChange={(e)=>{setDesc(e.target.value)}}/>
        </div>
        <div className="mb-6">
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 ">Demo Link</label>
            <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500    " placeholder='Website Link'  onChange={(e)=>{setDemo(e.target.value)}}/>
        </div>
        <div className="mb-6">
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 ">Link</label>
            <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500    "  placeholder='https://github.com/User-Name/Project' required onChange={(e)=>{setLink(e.target.value)}}/>
        </div>
        <div className="mb-6 text-center">
			<button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
			    type="submit">
				Add
			</button>
        </div>
        </form>
        </div>
        </>
    )};