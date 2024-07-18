import { toast } from 'react-toastify';
import './Card.css';
import {FcLike} from "react-icons/fc";
import { useState ,useEffect} from 'react'

const Card = (props) => {

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  const [isLiked, setIsLiked] = useState(likedCourses.includes(course.id));

  useEffect(() => {
    setIsLiked(likedCourses.includes(course.id));
  }, [likedCourses, course.id]);
  
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // If the course is already liked, remove it from likedCourses
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed")
      
    } else {
      // If the course is not liked, add it to likedCourses
     
      if(likedCourses.length==0)
      {
        setLikedCourses([course.id]);
      }
      else{
         setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked succefully");
     
    }
  }

  return (
    <div className='card'>
      <div className='thumbnail-container'>
        <img className='thumbnail' src={course.image.url} alt={course.title} />
        <div className='icon-container'>
          <button onClick={clickHandler} >
            <FcLike className='icon' style={{ opacity: isLiked ? 1 : 0.5 }}  fontSize="1rem" />
          </button>
        </div>
      </div>
      <h3 className='title'>{course.title}</h3>
      <p className='description'>{course.description.substring(0,200)+'...'}</p>
    </div>
  );
};

export default Card;
