import './App.css'
import Header  from'./Components/Header.jsx'
import FilterHeading from './Components/FilterHeading.jsx'
import {apiUrl,filterData} from './Components/data.js'
import Courses from './Components/Courses.jsx'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Spinner from './Components/Spinner.jsx'


export default function App() {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
let response=await fetch(apiUrl)
      let output=await response.json();
    setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData(); 
  },[])

  return (
   <div>
     <div>
  <Header></Header>
     </div>

     <div>
       
     <FilterHeading filterData={filterData} category={category} setCategory={setCategory} ></FilterHeading>
        </div>
     <div>  
     {
       loading ? (<Spinner/>):(<Courses courses= {courses} category={category}/>)
     }
        </div>
    
   </div>
  )
}
