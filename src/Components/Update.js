import { useState , useEffect , useContext} from "react";
import {db , storage} from "../Firebase";
import {collection ,query, getDocs,where, updateDoc, doc} from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";
import {getStorage, ref, uploadBytes} from "firebase/storage";
export const Update = () => {
    const {currentUser} = useContext(AuthContext);
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        const getUsers=async()=>{
          const data=await getDocs(query(collection(db,"Alumni"), where("uid","==",currentUser.uid)));
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        getUsers();
    },[]);
    const [Name,setName]=useState(users.Name)
    const [dept,setDept]=useState(users.Department);
    const [domain,setDomain]=useState(users.Domain);
    const [github, setgithub] = useState(users.Github);
    const [linkedin, setLinkedin] = useState(users.LinkedIn);
    const [Twitter, setTwitter] = useState(users.Twitter);
    const [email, setemail] = useState(users.email);
    const updateUser = async (id,Name,dept,domain,github,e) => {
        e.preventDefault();
        const userDoc = doc(db, "Alumni", id);
        const newDat={Name:Name,Department:dept,Domain:domain,Github:github};
        console.log(users);
        console.log(newDat);        
          try{
          await updateDoc(userDoc,newDat);
          console.log("Updated");
        }
          catch(error){
            console.log(error);
          }
        };
        return(<>
        
        {

            <>
                    {
                        users.map((user)=>{
                            return(
                                <>
                                            <div className="bg-gray-200 min-h-screen pt-2 font-mono my-16">
                <div className="container mx-auto">
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-gray-900">Update Account</h2>
                        <form className="mt-6 border-t border-gray-400 pt-4">
                            <div className='flex flex-wrap -mx-3 mb-6'>
                        {/* <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Email</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email'  />
                        </div> */}
                        <div className='w-full md:w-full px-3 mb-6 '>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                            <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Change Password</button>
                        </div>
                        
                        
                        <div className="personal w-full border-t border-gray-400 pt-4">
                            <h2 className="text-2xl text-gray-900">Personal info:</h2>
                            
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Name </label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required onChange={(event)=>{setName(event.target.value)}} value={user.Name} />
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Department</label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required onChange={(event)=>{setDept(event.target.value)}} value={user.Department} />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >GitHub</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  onChange={(event)=>{setgithub(event.target.value)}} value={user.Github}/>
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >LinkedIn</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' value={user.LinkedIn} onChange={(event) =>{setLinkedin(event.target.value)}} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Twitter</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  onChange={(event)=>{setTwitter(event.target.value)}} value={user.Twitter}/>
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Email</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'value={user.email} onChange={(event) =>{setemail(event.target.value)}} />
                                </div>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                <textarea className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'></textarea>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Domain</label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required onChange={(event)=>{setDomain(event.target.value)}} value={user.Domain} />
                            </div>
                            <div className="flex justify-end">
                                <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit" onClick={(e)=>{updateUser(user.id,Name,dept,domain,github,e)}}>Save</button>
                            </div>
                        </div>
                        {/* <div className="w-full border-t border-gray-400 pt-4"></div> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
                                </>
                            )
                        })
                    }
                
            </>
        }
     
        </>
        );
}