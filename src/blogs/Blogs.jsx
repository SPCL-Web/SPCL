import React from 'react'
import './Blogs.css'
import frame from '../images/Frame 1.png'
import images from '../images/Images.png'
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
  return (
    <>


      <div className="blog-container">

        <div className="left">
          <div className="input">
            <div className="input-box">
              <div className="search-container">
                <input type="text" placeholder="Search Blogs Here" />
                <CiSearch className="search-icon" />
              </div>

            </div>
          </div>


          <div className="category">
            <h3>Categories</h3> <br />

            <div className="category-para">
              <p>Success Stories Blog</p> <br />
              <p>College Blog</p><br />
              <p>Job Blog</p>
            </div>

          </div>


          <div className="image">
            <img src={images} alt="" />

          </div>

          <div className="category">
            <h3>Stay Updated</h3> <br />

            <div className="category-para">
              <p>Continuing Success</p> <br />
              <p>Internship to Career</p><br />
              <p>Resilience Rewarded</p>
            </div>

          </div>



          <div className="category">
            <h3>Recent Posts</h3> <br />

            <div className="category-para">
              <p>Student Success</p> <br />
              <p>Job Journeys</p><br />
              <p>Career Triumphs</p><br />
              <p>Intern Insights </p>
            </div>

          </div>
        </div>


        <div className="right">

          <div className="blog-img">
            <img src={frame} alt="" />
          </div>

          <p className='blog-head'>From 500 Applications to Jaguar: A Journey of Perseverance and Triumph with Scholar Pro Connect LLP</p>

          <p className='blog-head2'>Leave a comment / Success Story/ By </p>


          <BlogContent />
          
          <div className="post">

            <div className="previous-post">
              <div className="prev-icon">
                <div className="p-icon"><FaArrowLeftLong /></div>
                <p className="prev-post"> Previous Post </p>
              </div>

            </div>


            <div className="prev-icon">
              <p className="next-post"> Next Post        </p>
              <div className="n-icon"> <FaArrowRightLong /></div>
            </div>


          </div>
          <Comment />


        </div>

      </div>
    </>
  )
}




const BlogContent = () => {
  return (
    <div className="blog-content">

      <p className="para1">Navigating the Road to Success: Aditi's Journey from 500 Job Applications to Jaguar Land Rover
        <h4> Background Information</h4><br />
        Aditi's journey to a fulfilling career in the automotive industry is a story of perseverance and dedication. After completing her engineering degree from the prestigious College of Engineering Pune (COEP), Aditi began her career in the aerospace sector at Eaton, where she worked for a year. Despite her early success, her passion lay in the automotive industry, and she was determined to make the switch.</p>


      <p className="para2">
        She had an opportunity to pursue further studies at RWTH University in Germany but ultimately chose the UK for her M.Sc. due to language barriers and the availability of a post-study work visa, which Germany did not offer.
      </p>
      <br />

      <p className="para3">
        <h4>Job Application Journey</h4><br />
        Aditi's job search journey was a marathon, not a sprint. She began applying for jobs right when she got into her M.Sc. program, initially targeting basic roles. As she progressed, she focused on graduate roles that opened between September and January, aimed at joining the following September. She emphasizes the importance of starting the job search early, as many students tend to get diverted by college activities.
      </p>


      <p className="para4">To find job openings, Aditi extensively used company career pages, LinkedIn, and Gradcracker. Despite applying to 500 companies, she acknowledges that she made several mistakes due to a lack of knowledge about the application process. Among her batch of 100 students, only three, including her, secured jobs, highlighting the challenges faced by international students, especially those from India and China.</p><br />


      <p className="para5">
        <h4>Overcoming Obstacles</h4><br />
        Aditi faced numerous rejections, often due to visa sponsorship issues. She stayed motivated by focusing on her academics and applying consistently, even if it meant facing repeated failures. She advises job seekers to get used to rejection as part of the process and emphasizes the importance of trial and error in improving one's CV. Aditi benefited from her college's Career Guidance Society, which helped in refining her CV and comparing it with job descriptions (JDs).</p>


      <p className="para6">
        One of the unique aspects of her job search involved cognitive assessment games used by companies to evaluate speed, precision, and behavioral traits, particularly for graduate roles.
      </p>

      <br />
      <p className="para7">
        <h4>  Securing the Job at JLR</h4><br />
        Receiving the job offer from Jaguar Land Rover was a dream come true for Aditi. She values the work-life balance at JLR, where she can leave the office at 4 PM, which she finds significantly better than her experiences in India. Her role at JLR involves working on CAD designs for anchorage zones for seatbelts, ensuring compliance with legal requirements. Aditi finds this work exciting and appreciates the supportive environment and excellent team dynamics.
      </p><br />


      <p className="para8">

        <h4> CV Guidance for Students</h4><br />
        Aditi's journey inspired her to provide CV guidance to students. She learned valuable lessons from her application process, including the importance of tailoring each CV to the specific job description. One of the common mistakes she notices is the use of generic CVs that are not tailored to the job applied for, leading to missed opportunities.
      </p>



      <p className="para9">
        She advises students to avoid this by customizing their CVs to match the requirements of each job description. This approach increases the chances of getting noticed by automated tracking systems (ATS) and recruiters.
      </p>
      <br />

      <p className="para10">
        <h4>  dvice and Insights</h4>
        Aditi underscores the importance of networking in the job search process. Building a professional network can open doors and provide valuable support and opportunities. She encourages students and job seekers to actively engage in networking to enhance their job prospects.
      </p>
      <br />
      <p className="para11">
        <h4>  Future Goals</h4><br />
        While Aditi is currently focused on her technical role, she is also interested in exploring management positions in the future. She aims to develop her skills further and continue contributing to the automotive industry.
      </p>

      <br />

      <p className="para12">
        <h4>
          Personal Reflections
        </h4><br />
        Looking back, Aditi acknowledges that she would have started preparing for cognitive assessment games earlier if she had known about them. She balances her professional life with her role in providing CV guidance by keeping her workload manageable.
      </p>

      <br />

      <p className="para13">
        <h4>  Conclusion</h4><br />
        Aditi's journey from applying to 500 companies to landing her dream job at Jaguar Land Rover is a testament to perseverance, resilience, and continuous learning. She encourages job seekers to keep looking for opportunities and to view every application as a chance to grow, whether they get selected or not. Her story serves as an inspiration for many aspiring professionals navigating the challenging job market.
      </p>
    </div>

  )
}


const Comment = () => {
  return (
    <>


      <div className="comment">

        <p className='comment-para'>Leave a comment</p>
        <p>Your email address will not be published. Required fields are marked * Comment</p>



        <div className="comment-msg">
          <textarea className='com-message' name="" id="" placeholder='Type Here...' rows={15} cols={85}></textarea>
        </div>

        <div className="com-input">
          <input className='com-name' type="text" placeholder='Enter Your name' required />

          <input className='com-name' type="email" placeholder='Enter Your Email' />
        </div>

      </div>
      <button className='post-btn'>Post comment</button>



    </>
  )
}
export default Blogs














