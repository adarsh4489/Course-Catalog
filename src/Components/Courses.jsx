import './Courses.css';
import Card from './Card.jsx';
import { useState } from 'react';

function Courses(props){
let courses=props.courses;
  let category=props.category;
    const [likedCourses, setLikedCourses]=useState([]); 
  
  
  // This function is for collecting all the courses which is present in the course api associated with different course category and those courses are stored in the allCourses array
  
  function getCourses(){
    
    if(category==="All")
    {

      let allCourses=[];   
      //stores all the courses
      Object.values(courses).forEach(array=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
        return allCourses;
      }
    else{
      //will show courses of perticular category
       return courses[category];
        }
    }
    
  
  return(
    <div className="container">
      {
        getCourses().map((course)=>{
          return (
      <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
          )
          
      }
    )}
    </div>
  )
}
export default Courses;