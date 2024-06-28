import React, { useRef } from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setUserId } from '../../redux/resultReducer'
import toast from "react-hot-toast";
import '../../admin/QuizStyle.css'


const Home = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  function startQuiz(){
      if(inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value))
      }
      else{
        toast.error("Please Enter username");
     
     
      }
  }

  


  return (
    <>


{/* <div className='qcontainer'>
       


        <form id="form">
            <input ref={inputRef} className="quserid" type="text" placeholder='Username*' />
        </form>

        <div className='qstart'>
            <Link className='btn' to={'/quiz'}  onClick={startQuiz}  >Start Quiz</Link>
           
        </div>

    </div>   */}
      <Hero />
      <AboutCard />
      <HAbout />
      {/* <Testimonal /> */}
      <Hblog />
      {/* <Hprice /> */}


    



    </>
  );
};

export default Home;
