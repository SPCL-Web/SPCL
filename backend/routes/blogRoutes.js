import express from 'express';
import { createBlogController, createBlogFeedBack, deleteBlog, getAllBlogFeedBack, getBlogController, updateBlog, upload } from '../controllers/blogController.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
const router = express.Router()




router.post('/create-blog', upload.single("photo") ,createBlogController);
router.get('/get-blog', getBlogController);
router.put('/update-blog/:id',updateBlog)
router.delete('/delete-blog/:id', deleteBlog);

// FeedBack Blog

router.post('/create-feedback', createBlogFeedBack);
router.get('/get-feedback', getAllBlogFeedBack);








export default router;