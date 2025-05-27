import express from 'express'
import { getAllCourse, getCourseId } from '../controllers/courseController.js';


const courseRouter = express.Router()

// Get All Course
courseRouter.get('/all', getAllCourse)

// Get Course Data By Id
courseRouter.get('/:id', getCourseId)

// Example endpoint for course payments
courseRouter.post('/course-paypal', (req, res) => {
    // Payment processing logic here
    res.send('Course payment processed');
});


export default courseRouter;