import BlogModel from '../model/blog.js'
import BlogFeedBackSchema from '../model/blogFeedBack.js'
import { cloudinary } from '../helper/cloudinaryConfig.js'
import multer from 'multer';



const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    try {
      callback(null, './uploads');
    } catch (err) {
      callback(err);
    }
  },
  filename: (req, file, callback) => {
    try {
      callback(null, `image-${Date.now()}-${file.originalname}`);
    } catch (err) {
      callback(err);
    }
  }
});

const isImage = (req, file, callback) => {
  try {
    if (file.mimetype.startsWith("image")) {
      callback(null, true);
    } else {
      callback(new Error("Only images are allowed"));
    }
  } catch (err) {
    callback(err);
  }
};

export const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});




export const createBlogController = async (req, res) => {

  // , h4, p4 , h5 , p5 , h6 ,p6 , h7 , p7, h8 , p8, h9 , p9
  try {
    const { heading1, heading2, h3, p3, category, h4, p4, h5, p5, h6, p6, h7, p7, h8, p8, h9, p9, } =
      req.body;


    //  const {img} = req.file.path; 

    //  console.log("Image ", img);

    //alidation
    switch (true) {
      case !heading1:
        return res.status(500).send({ error: "Heading1 is Required" });
      case !heading2:
        return res.status(500).send({ error: "Heading 2 is Required" });

      case !category:
        return res.status(500).send({ error: "Category is Required" });
      // case !img:
      //   return res.status(500).send({ error: "Image is Required" });

    }

    // console.log( JSON.stringify("Request.file", req, null, 2));

    const upload = await cloudinary.uploader.upload(req?.file?.path);

    console.log("Upload File",JSON.stringify(upload, null, 2)
  );

    const blogs = new BlogModel({ heading1, heading2, h3, p3, category, h4, p4, h5, p5, h6, p6, h7, p7, h8, p8, h9, p9, imagepath: upload.secure_url, });

    await blogs.save();
    res.status(201).send({
      success: true,
      message: "Blog Created Successfully",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing Blog",
    });
  }
};


//get all products


export const getBlogController = async (req, res) => {
  try {
    const blogs = await BlogModel
      .find({})
      .populate("category")

      .sort({ createdAt: -1 });

      // console.log("Bloggs for destroy",blogs);

    

    res.status(200).send({
      success: true,
      counTotal: blogs.length,
      message: "AllBlog ",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting Blog",
      error: error.message,
    });
  }
};



// Update Blog


export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading1, heading2, h3, p3, category, h4, p4, h5, p5, h6, p6, h7, p7, h8, p8, h9, p9 } =
      req.body;

    const newBlog = await BlogModel.findByIdAndUpdate(id, {
      heading1, heading2, h3, p3, category, h4, p4, h5, p5, h6, p6, h7, p7, h8, p8, h9, p9
    },
      { new: true }


    );

    res.status(200).send({
      success: true,
      message: "Blog Updated Successfully",
      newBlog,
    })

  } catch (error) {
    console.log("Error in Updating Blog Controller", error);
    res.status(500).send({
      success: false,
      message: "Error in Updating Blog Controller",
      error: error,
    })

  }
}


export const deleteBlog = async (req, res) => {
  try {

    const { id } = req.params;
    



    const deletedBlog = await BlogModel.findByIdAndDelete(id);



    res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
      deletedBlog,

    })

  } catch (error) {
    console.log("error in  DeleteBlog", error);
    res.status(500).send({
      success: false,
      message: "Error in ddelte Blog",
      error: error,
    })


  }
}




export const createBlogFeedBack = async(req, res) => {
  try {

    const {message , name , email} = req.body;

    console.log(message ,name ,email); 

    if(!message || !name || !email) { 
      return res.status(401).send({
        success:false,
        message:"All fields are required",
      })
    }


    const data = BlogFeedBackSchema.create({message , email, name});
    
    return res.status(200).send({
      success:true,
      message:"Your Feedback Sent sucessfully",
      data
    })
    
  } catch (error) {
    console.log("Error While Creating Feedback", error);
    res.status(404).send({
      success: false,
      message: error.message,

    })
    
  }
}




export const getAllBlogFeedBack = async(req,res)=>{
  try {

    const data =  await BlogFeedBackSchema.find({})  
    .sort({ createdAt: -1 });
    ;

    res.status(200).send({
      success: true,
      message: "Blog feedback Got successfully",
      data
    })
    
  } catch (error) {
    console.log("Error While Fetching BLog Feedback",error);
    res.status(404).send({
      success: false,
      message: error.message,

    })

    
  }
}



// export const likeUnlikePost = async (req, res) => {
//   try {
//       //now this id converted  into postId
//       const { id: blogId } = req.params;
//       const userId = req.user._id;
//       const blog = await BlogModel.findById(blogId);
//       if (!blog) return res.status(404).json({ error: "blog not found" });
//       //jo like kiya uske id ko like array me include kar dena hai
//       const userLikeblog = blog.likes.includes(userId);

//       if (userLikePost) {
//           //unlike post
//           //post model me is blogId ko likes array se pull(delete) kar dena hai
//           await Post.updateOne({ _id: blogId }, { $pull: { likes: userId } });
//           res.status(200).json({ message: "Post unlike successfully" });


//       }
//       else {
//           //like post
//           post.likes.push(userId);
//           await post.save();
//           res.status(200).json({ message: "Post Liked successfully " });

//       }

//   } catch (error) {
//       console.log("Error in LikeUnlike Post", error);
//       res.status(404).json({ error: "Error in LikeUnlike Post " })

//   }
// }

