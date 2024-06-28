import './AllBlogs.css'
import frame from '../images/Frame 1.png'
import images from '../images/Images.png'
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import moment from 'moment';
import React, { useState, useEffect, useRef } from "react";
import AdminMenu from '../layout/AdminMenu'
import { toast } from "react-hot-toast";
import axios from "axios";
import { Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { AiFillLike } from "react-icons/ai";

import './Blog.css'
// import usePreviewimage from '../hooks/usePreviewimage';
const { Option } = Select;




const CreateBlog = () => {

  const [likes, setLikes] = useState(10);
  const [liked, setLiked] = useState(false);
  // Function to handle like button click
  const handleLike = () => {
    if (liked) {
      // If already liked, decrement likes and set liked to false
      setLikes(likes - 1);
      setLiked(false);
    } else {
      // If not liked, increment likes and set liked to true
      setLikes((likes)=>likes+1);
      setLiked(true);
    }

  }
    const [feedBackMessage, setfeedBackMessage] = useState("I like this blog");
    const [feedBackname, setfeedBackname] = useState("");
    const [feedbackemail, setfeedbackEmail] = useState("");



    // const { handleImageChange, imgUrl, setImgUrl } = usePreviewimage();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const [select, setSelect] = useState(null);
    const [categories, setCategories] = useState([]);
    const [heading1, setheading1] = useState("");
    const [heading2, setheading2] = useState("");
    const [category, setCategory] = useState("");
    const [h3, seth3] = useState("");
    const [p3, setp3] = useState("");
    const [h4, seth4] = useState("");
    const [p4, setp4] = useState("");
    const [h5, seth5] = useState("");
    const [p5, setp5] = useState("");
    const [h6, seth6] = useState("");
    const [p6, setp6] = useState("");
    const [h7, seth7] = useState("");
    const [p7, setp7] = useState("");
    const [h8, seth8] = useState("");
    const [p8, setp8] = useState("");
    const [h9, seth9] = useState("");
    const [p9, setp9] = useState("");


    const [updatedheading1, setUpdatedHeading1] = useState("");
    const [updatedHeading2, setUpdatedHeading2] = useState("");
    const [updatedcategory, updatedsetCategory] = useState("");
    const [updatedh3, updatedseth3] = useState("");
    const [updatedp3, updatedsetp3] = useState("");
    const [updatedh4, updatedseth4] = useState("");
    const [updatedp4, updatedsetp4] = useState("");
    const [updatedh5, updatedseth5] = useState("");
    const [updatedp5, updatedsetp5] = useState("");
    const [updatedh6, updatedseth6] = useState("");
    const [updatedp6, updatedsetp6] = useState("");
    const [updatedh7, updatedseth7] = useState("");
    const [updatedp7, updatedsetp7] = useState("");
    const [updatedh8, updatedseth8] = useState("");
    const [updatedp8, updatedsetp8] = useState("");
    const [updatedh9, updatedseth9] = useState("");
    const [updatedp9, updatedsetp9] = useState("");

    const [blog, setBlog] = useState([]);
    const [file, setfile] = useState("");
    // const imageRef = useRef(null);


    // const[img,setImage] = useState("");

    const [blogCount, setBlogCount] = useState("");





    //get all category
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("/api/v1/category/get-category");
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something wwent wrong in getting catgeory");
      }
    };

    useEffect(() => {
      getAllCategory();
    }, []);

    //create Blog function


    const handleCreate = async (e) => {
      e.preventDefault();
      try {

        // const formData = new FormData();
        // formData.append("photo", file);
        const formData = new FormData();
        formData.append("photo", file); // Append the file here
        formData.append("heading1", heading1);
        formData.append("heading2", heading2);
        formData.append("category", category);
        formData.append("h3", h3);
        formData.append("p3", p3);
        formData.append("h4", h4);
        formData.append("p4", p4);
        formData.append("h5", h5);
        formData.append("p5", p5);
        formData.append("h6", h6);
        formData.append("p6", p6);
        formData.append("h7", h7);
        formData.append("p7", p7);
        formData.append("h8", h8);
        formData.append("p8", p8);
        formData.append("h9", h9);
        formData.append("p9", p9);
        // formData.append("imagepath", file); // Append the file here

        const response = await axios.post("/api/v1/blog/create-blog", formData);

        // setImgUrl("");
        // window.location.reload();

        // console.log("response: " + response);



        toast.success("Blog created successfully");
        // console.log(response);
        navigate("/all-blog");

      } catch (error) {
        console.log("Error While creating Blog", error);
        toast.error("Please fill the required fields");
      }
    };
    // useEffect(() => {
    //   if (imgUrl) {
    //     console.log("Updated image URL:", imgUrl);
    //   }
    // }, [imgUrl]);


    const getAllBlogs = async () => {
      try {

        const data = await axios.get('/api/v1/blog/get-blog');
        // console.log("All Blog Heres",);
        setBlogCount(data?.data?.counTotal)
        setBlog(data.data.blogs);

        // console.log("Category", data.data.blogs[0].category.name);


      } catch (error) {
        console.log("errror in getting all blogs", error);

      }
    }

    useEffect(() => {
      getAllBlogs();
    }, [])


    const updateBlog = async (e) => {
      e.preventDefault();

      try {

        const { data } = await axios.put(`/api/v1/blog/update-blog/${select._id}`,
          {
            heading1: updatedheading1,
            heading2: updatedHeading2,
            category: updatedcategory,
            h3: updatedh3,
            p3: updatedp3,
            h4: updatedh4,
            p4: updatedp4,
            h5: updatedh5,
            p5: updatedp5,
            h6: updatedh6,
            p6: updatedp6,
            h7: updatedh7,
            p7: updatedp7,
            h8: updatedh8,
            p8: updatedp8,
            h9: updatedh9,
            p9: updatedp9,


          }


        )



        if (data.success) {

          toast.success("Blog Updated Successfully");
          setSelect(null);
          getAllBlogs();
          setUpdatedHeading1("");
          setUpdatedHeading2("");
          updatedseth3(blog.h3);
          updatedsetp3("")
          updatedseth4("");
          updatedsetp4("")
          updatedseth5("");
          updatedsetp5("")
          updatedseth6("");
          updatedsetp6("")
          updatedseth7("");
          updatedsetp7("")
          updatedseth8("");
          updatedsetp8("")
          updatedseth9("");
          updatedsetp9("");
          setVisible(false);

        }

        else {
          toast.error(data?.message || "Spmething went wrong While Updating");
        }



      } catch (error) {
        console.log("Error While updating Blog", error);

      }
    }


    const deleteBlog = async (bid) => {

      try {

        const { data } = await axios.delete(`/api/v1/blog/delete-blog/${bid}`)

        if (data.success) {
          toast.success("Blog deleted successfully");
          getAllBlogs();
        }
        else {
          toast.error("Something went wrong While Updating Blog");
        }

      } catch (error) {
        console.log("Something went wrong while deleting Blog", error);

      }

    }



    const createBlogFeedback = async (e) => {
      try {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append("message", feedBackMessage);
        // formData.append("name", feedBackname);
        // formData.append("email", feedbackemail);

        const feedbackData = {
          message: feedBackMessage,
          name: feedBackname,
          email: feedbackemail,
        };
        const data = await axios.post('/api/v1/blog/create-feedback', feedbackData);


        toast.success("Your feedback sent successfully")
        setfeedBackMessage("")
        setfeedBackname("")
        setfeedBackname("")




        // console.log("Feedback Created", res);
      } catch (error) {
        console.log("Error while creating BlogFeedback", error);

      }
    }






    return (

      <>

        <div className="container m-3 p-3">

          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="dashboard">Create Blog</h1>
            <div className="m-1 w-75">
              <p style={{ fontWeight: "bold" }}>Select a category:</p>
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option
                    className="dropdown-item-category"
                    key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>

              <h2>Select Image</h2>

              {/* <input type='file' hidden  ref={imageRef} onChange={handleImageChange} /> */}
              <input

                onChange={(e) => setfile(e.target.files[0])}

                type="file"
                placeholder='Choose File'
              //  ref={imageRef}
              />

              {/* <h3
           onClick={() => imageRef.current.click()}>
           </div>   Select Image 
            </h3> */}


              {/* {imgUrl && (

              <>
                <img src={imgUrl} alt='Selected img' />


              </>
            )} */}

              {/* <p style={{fontWeight:"bold"}}>Upload Photo:</p>
        <div className="mb-3">
          <label className="btn btn-outline-secondary col-md-12">
            {photo ? photo.name : "Upload Photo"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              hidden
            />
          </label>
        </div>
        <div className="mb-3">
          {photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="product_photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          )}
        </div> */}
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading1 of Blog: </p>
                <input
                  type="text"
                  value={heading1}
                  placeholder="Write First Heading "
                  className="form-control"
                  onChange={(e) => setheading1(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p
                  style={{ fontWeight: "bold" }}

                >Write Heading2 of Blog:</p>
                <input
                  type="text"
                  rows={5}
                  value={heading2}
                  placeholder="Write heading 2"
                  className="form-control"
                  onChange={(e) => setheading2(e.target.value)}
                />
              </div>

              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 3  of Blog:</p>
                <input

                  value={h3}
                  placeholder="Write Heading 3"
                  className="form-control"
                  onChange={(e) => seth3(e.target.value)}
                />
              </div>
              <div className="mb-3 paragraph-input">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 3</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p3}
                  placeholder="Write a paragraph for heading 3"
                  className="form-control"
                  onChange={(e) => setp3(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 4  of Blog:</p>
                <input

                  value={h4}
                  placeholder="write Heading 4"
                  className="form-control"
                  onChange={(e) => seth4(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 4</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p4}
                  placeholder="Write a paragraph for heading"
                  className="form-control"
                  onChange={(e) => setp4(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 5  of Blog:</p>
                <input

                  value={h5}
                  placeholder="write Heading 5"
                  className="form-control"
                  onChange={(e) => seth5(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 5</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p5}
                  placeholder="Write a paragraph for heading"
                  className="form-control"
                  onChange={(e) => setp5(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 6  of Blog:</p>
                <input

                  value={h6}
                  placeholder="write Heading 6"
                  className="form-control"
                  onChange={(e) => seth6(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 6</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p6}
                  placeholder="Write a paragraph for heading"
                  className="form-control"
                  onChange={(e) => setp6(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 7  of Blog:</p>
                <input

                  value={h7}
                  placeholder="write Heading 7"
                  className="form-control"
                  onChange={(e) => seth7(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 7</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p7}
                  placeholder="Write a paragraph for heading"
                  className="form-control"
                  onChange={(e) => setp7(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 8  of Blog:</p>
                <input

                  value={h8}
                  placeholder="write Heading 8"
                  className="form-control"
                  onChange={(e) => seth8(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 8</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p8}
                  placeholder="Write a paragraph for heading"
                  className="form-control"
                  onChange={(e) => setp8(e.target.value)}
                />
              </div>
              <div className="mb-3 heading-input">
                <p style={{ fontWeight: "bold" }}>Write Heading 9  of Blog:</p>
                <input

                  value={h9}
                  placeholder="write Heading 9"
                  className="form-control"
                  onChange={(e) => seth9(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p style={{ fontWeight: "bold" }}>Write Paragraph for heading 9</p>
                <textarea

                  rows={25}
                  cols={90}

                  value={p9}
                  placeholder="Write a paragraph for heading"
                  className="form-control"
                  onChange={(e) => setp9(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary"

                  onClick={handleCreate}



                >
                  CREATE BLOG
                </button>
              </div>
            </div>
          </div>



        </div>



        <div className='all-blog'>

          <h2 className='created'>Total Blog = {blogCount}</h2>

          {
            blog?.map(blog => (


              <div key={blog._id}>





                <h2 className='created'>Created At - {moment(blog?.createdAt).fromNow()}</h2>

                <h2 className='created'>Category - {blog?.category?.name}</h2>


                <h3 className='created'
                  onClick={() => {
                    setVisible(true);
                    setSelect(blog)
                    setUpdatedHeading1(blog.heading1);
                    setUpdatedHeading2(blog.heading2);
                    updatedsetCategory(blog.category);
                    updatedseth3(blog.h3);
                    updatedsetp3(blog.p3)
                    updatedseth4(blog.h4);
                    updatedsetp4(blog.p4)
                    updatedseth5(blog.h5);
                    updatedsetp5(blog.p5)
                    updatedseth6(blog.h6);
                    updatedsetp6(blog.p6)
                    updatedseth7(blog.h7);
                    updatedsetp7(blog.p7)
                    updatedseth8(blog.h8);
                    updatedsetp8(blog.p8)
                    updatedseth9(blog.h9);
                    updatedsetp9(blog.p9)

                  }}

                >Update Blog</h3>


                <h3
                  onClick={() => deleteBlog(blog._id)}
                  className='created'>Delete Blog</h3>



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
                      <img src={blog?.imagepath} alt="" />
                    </div>

                    <p className='blog-head'>{blog.heading1}</p>

                    <p className='blog-head2'>Leave a comment / Success Story/ By </p>


                    <div className="blog-content">

                      <p className="para1">{blog.heading2}
                        <h4> {blog.h3}</h4><br />
                        {blog.p3}</p>


                      {/* <p className="para2">
      She had an opportunity to pursue further studies at RWTH University in Germany but ultimately chose the UK for her M.Sc. due to language barriers and the availability of a post-study work visa, which Germany did not offer.
    </p>
    */}

                      <br />

                      <p className="para3">
                        <h4>{blog.h4}</h4><br />
                        {blog.p4}
                      </p>


                      {/* <p className="para4">To find job openings, Aditi extensively used company career pages, LinkedIn, and Gradcracker. Despite applying to 500 companies, she acknowledges that she made several mistakes due to a lack of knowledge about the application process. Among her batch of 100 students, only three, including her, secured jobs, highlighting the challenges faced by international students, especially those from India and China.</p> */}

                      <br />


                      <p className="para5">
                        <h4>{blog.h5}</h4><br />
                        {blog.p5}</p>


                      {/* <p className="para6">
      One of the unique aspects of her job search involved cognitive assessment games used by companies to evaluate speed, precision, and behavioral traits, particularly for graduate roles.
    </p> */}

                      <br />
                      <p className="para7">
                        <h4>  {blog.h6}</h4><br />
                        {blog.p6}
                      </p><br />


                      <p className="para8">

                        <h4>{blog.h7}</h4><br />
                        {blog.p7}
                      </p>



                      {/* <p className="para9">
      She advises students to avoid this by customizing their CVs to match the requirements of each job description. This approach increases the chances of getting noticed by automated tracking systems (ATS) and recruiters.
    </p> */}
                      <br />

                      <p className="para10">
                        <h4>  {blog.h8}</h4>
                        {blog.p8}
                      </p>
                      <br />
                      <p className="para11">
                        <h4>  {blog.h9}</h4><br />
                        {blog.p9}
                      </p>

                      <br />

                      {/* <p className="para12">
      <h4>
        Personal Reflections
      </h4><br />
      Looking back, Aditi acknowledges that she would have started preparing for cognitive assessment games earlier if she had known about them. She balances her professional life with her role in providing CV guidance by keeping her workload manageable.
    </p> */}

                      {/* <br /> */}
                      {/* 
    <p className="para13">
      <h4>  Conclusion</h4><br />
      Aditi's journey from applying to 500 companies to landing her dream job at Jaguar Land Rover is a testament to perseverance, resilience, and continuous learning. She encourages job seekers to keep looking for opportunities and to view every application as a chance to grow, whether they get selected or not. Her story serves as an inspiration for many aspiring professionals navigating the challenging job market.
    </p> */}
                    </div>

                    <div className="like">

                      {
                        liked ?<>
                        <AiFillLike onClick={handleLike} className='like-icon' />
                        <p>{likes} </p></>: (
                         <>
                          <SlLike className='like-icon' onClick={handleLike} /> 
                          <p>{likes} </p>
                         </>
                        )

                      }
                   
                    </div>


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




                    {/* Comment___________ */}


                    <form action="" onSubmit={createBlogFeedback}>
                      <div className="comment">

                        <p className='comment-para'>Leave a comment</p>
                        <p>Your email address will not be published. Required fields are marked * Comment</p>



                        <div className="comment-msg">
                          <textarea
                            onChange={(e) => setfeedBackMessage(e.target.value)}
                            value={feedBackMessage}

                            className='com-message' name="" id="" placeholder='Type Here...' rows={15} cols={85}></textarea>
                        </div>

                        <div className="com-input">
                          <input

                            onChange={(e) => setfeedBackname(e.target.value)}
                            value={feedBackname}

                            className='com-name' type="text" placeholder='Enter Your name' required />

                          <input
                            onChange={(e) => setfeedbackEmail(e.target.value)}
                            value={feedbackemail}

                            className='com-name' type="email" placeholder='Enter Your Email' />
                        </div>


                        <div className='postBtn'>
                          <button type='submit' className='post-btn'>Post comment</button>
                        </div>
                      </div>
                    </form>

                    {/* <button onClick={handleLike}></button> */}

                   

                  </div>

                </div>



                <Modal
                  onCancel={() => setVisible(false)}
                  footer={null}
                  visible={visible}

                >


                  <div>
                    <form onSubmit={updateBlog}>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading1  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading1'
                          value={updatedheading1}
                          setValue={setUpdatedHeading1}

                          onChange={(e) => setUpdatedHeading1(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading2  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading2'
                          value={updatedHeading2}
                          setValue={setUpdatedHeading2}

                          onChange={(e) => setUpdatedHeading2(e.target.value)
                          }
                        />
                      </div>


                      <p style={{ fontWeight: "bold" }}>Select a new  category:</p>
                      <Select
                        bordered={false}
                        placeholder="Select a new category"
                        size="large"
                        showSearch
                        className="form-select mb-3"
                        onChange={(value) => {
                          updatedsetCategory(value);
                        }}
                      >
                        {categories?.map((c) => (
                          <Option
                            className="dropdown-item-category"
                            key={c._id} value={c._id}>
                            {c.name}
                          </Option>
                        ))}
                      </Select>



                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 3  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading1'
                          value={updatedh3}
                          setValue={updatedseth3}

                          onChange={(e) => updatedseth3(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Paragraph 3  </h3>
                        <textarea

                          rows={20}
                          cols={60}

                          className="form-control"
                          placeholder='Enter new Paragraph 3'
                          value={updatedp3}
                          setValue={updatedsetp3}

                          onChange={(e) => updatedsetp3(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 4  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading 4'
                          value={updatedh4}
                          setValue={updatedseth4}

                          onChange={(e) => updatedseth4(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Pargraph 4  </h3>
                        <textarea

                          rows={20}
                          cols={60}

                          className="form-control"
                          placeholder='Enter new Paragraph 4'
                          value={updatedp4}
                          setValue={updatedsetp4}

                          onChange={(e) => updatedsetp4(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 5  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading 5'
                          value={updatedh5}
                          setValue={updatedseth5}

                          onChange={(e) => updatedseth5(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-5 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Paragraph 5  </h3>
                        <textarea

                          rows={20}
                          cols={60}

                          className="form-control"
                          placeholder='Enter new Paragraph 5'
                          value={updatedp5}
                          setValue={updatedsetp5}

                          onChange={(e) => updatedsetp5(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 6 </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading6'
                          value={updatedh6}
                          setValue={updatedseth6}

                          onChange={(e) => updatedseth6(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Paragraph 6  </h3>
                        <textarea
                          rows={20}
                          cols={60}

                          className="form-control"
                          placeholder='Enter new Paragraph 6'
                          value={updatedp6}
                          setValue={updatedsetp6}

                          onChange={(e) => updatedsetp6(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 7  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading 7'
                          value={updatedh7}
                          setValue={updatedseth7}

                          onChange={(e) => updatedseth7(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter Paragraph 7  </h3>
                        <textarea
                          rows={20}
                          cols={60}
                          className="form-control"
                          placeholder='Enter new Paragraph 7'
                          value={updatedp7}
                          setValue={updatedsetp7}

                          onChange={(e) => updatedsetp7(e.target.value) 
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 8  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading 8'
                          value={updatedh8}
                          setValue={updatedseth8}

                          onChange={(e) => updatedseth8(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter Paragraph 8  </h3>
                        <textarea

                          rows={20}
                          cols={60}

                          className="form-control"
                          placeholder='Enter new Paragraph 7'
                          value={updatedp8}
                          setValue={updatedsetp8}

                          onChange={(e) => updatedsetp8(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter new Heading 9  </h3>
                        <input type="text"

                          className="form-control"
                          placeholder='Enter new Heading 9'
                          value={updatedh9}
                          setValue={updatedseth9}

                          onChange={(e) => updatedseth9(e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 categry">
                        <h3
                          style={{ marginLeft: "5px" }}
                        >                Enter Paragraph 9  </h3>
                        <textarea

                          rows={20}
                          cols={60}

                          className="form-control"
                          placeholder='Enter new Paragraph 9'
                          value={updatedp9}
                          setValue={updatedsetp9}

                          onChange={(e) => updatedsetp9(e.target.value)
                          }
                        />
                      </div>



                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>






                  </div>




                </Modal>

              </div>

            ))
          }
        </div>

      </>













    );
  };

  export default CreateBlog;


  const Comment = () => {
    return (
      <>




      </>
    )
  }