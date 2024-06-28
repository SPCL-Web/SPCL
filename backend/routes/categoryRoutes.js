import express from "express";
const router = express.Router();
import { isAdmin, requireSignIn } from './../middleware/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from './../controllers/categoryController.js'

//routes

router.post('/create-category',createCategoryController)

//update-cateogry
router.put('/update-cateogry/:id',  updateCategoryController)

//getAll categoty
//Whwn user not login then also we have need to show all category
router.get('/get-category',categoryController)

//single category
router.get('/single-category/:slug',singleCategoryController)

//delete category

router.delete('/delete-category/:id',deleteCategoryController)


export default router;



