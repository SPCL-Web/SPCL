//     import  JWT  from "jsonwebtoken";
// import userModel from "../model/userModel.js";


// export const requireSignIn = async(req,res,next)=>{
//     try {
//         const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
//         req.user = decode;
//         next();
//         //decrypt bhi karna  h oga
        
//     } catch (error) {
//         console.log("Error in requireSignIn",error);

        
//     }

// }


// //admin acess

// export const isAdmin = async(req,res,next)=>{
//     try {

//         const user = await userModel.findById(req.user._id);
//         if(user.role!==1){
//             return res.status(401).send({
//                 success:false,
//                 message:"THis is not a administrator",

         
//            })
//         }
     

       

//         else{
//             next();
//         }
        
//     } catch (error) {
//         console.log("Error in isAdmin: " , error);
//         return res.status(401).send({
//             success:false,
//             error
//         })
        
//     }
// }














import JWT from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const requireSignIn = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({
                success: false,
                message: "Authorization header is missing",
            });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Token must be provided",
            });
        }

        const decode = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log("Error in requireSignIn", error);
        return res.status(401).send({
            success: false,
            message: "Invalid token",
            error,
        });
    }
};

// Admin access

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user || user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "This is not an administrator",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log("Error in isAdmin: ", error);
        return res.status(401).send({
            success: false,
            error,
        });
    }
};








