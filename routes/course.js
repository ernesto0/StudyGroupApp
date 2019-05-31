const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const passport = require('passport');

const Course = require('../models/Course');

router.get('/test', (req, res) => res.json({msg: "tanda works"}));


//Get courses
router.get('/', (req, res) => {
    Course.find()
    .then(course => res.json(course))
    .catch(err => res.status(404).json({noCourseFound: 'no courses found'}));
})

//Get course by ID
router.post('/getCourseByID', (req, res) => {
    Course.findOne({'_id': req.body.CourseID})
    .then(course => {
        return res.json(course);
    })
    .catch(err => res.status(404).json({noCoursesFound: 'no Course found'}));
})
//Create course
router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {
    const newCourse = new Course({
        department: req.body.department,
        courseNumber: req.body.courseNumber,
        section: req.body.section,
        instructor: req.body.instructor
    });
    newCourse.save;

    return res.json(newCourse);
})

//Update Course

//delete Course
router.post('/delete', (req, res) => {
    Course.deleteOne({'_id': req.body.courseID})
    .then(course =>{
        return res.json(course);
    })

})
//add student
router.post('/addStudent', passport.authenticate('jwt', {session: false}), (req, res) =>{
    Course.findByIdAndUpdate(req.body.courseID,
        {$push: {'students': req.body.studentID}})
        .then(course =>{
            console.log(course);
            return res.json(course);
        })
})

//remove student 
router.post('/delete', (req, res) => {
    console.log("delete: "+req.body.studentID);

    Course.findById(req.body.courseID)
    .then(course => {
        var index = course.students.indexOf(req.body.studentID);
        course.students.splice(index, 1);
        course.save(); 
    })
    return res.json(course);
})

//Add group
router.post('/addStudent', passport.authenticate('jwt', {session: false}), (req, res) =>{
    Course.findByIdAndUpdate(req.body.courseID,
        {$push: {'students': req.body.groupID}})
        .then(course =>{
            console.log(course);
            return res.json(course);
        })
})

//Remove group
router.post('/delete', (req, res) => {
    console.log("delete: "+req.body.groupID);

    Course.findById(req.body.courseID)
    .then(course => {
        var index = course.students.indexOf(req.body.groupID);
        course.students.splice(index, 1);
        course.save(); 
    })
    return res.json(course);
})

module.exports = router;
