const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CourseSchema = new Schema({
    department:{
        type: String, 
        required: true
    },
    courseNumber: {
        type: String, 
        required: true
    },
    studyGroups:[
        {
            type: Schema.Types.ObjectId,
            ref: 'studyGroup'
        }
    ],
    students:[
        {
            type: Schema.Types.ObjectId,
            ref: 'students'
        }
    ],
    section:{
        type: Number,
        required: false
    }

});
module.exports = Course = mongoose.model('course', CourseSchema);