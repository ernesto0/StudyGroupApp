const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const passport = require('passport');
const StudyGroup = require()

router.get('/test', (req, res) => res.json({msg: "sgroup works"}));

//Get groups
router.get('/', (req, res) => {
    StudyGroup.find()
    .then(studyGroup => res.json(studyGroup))
    .catch(err => res.status(404).json({nostudyGroupsFound: 'no studyGroups found'}));
})

//GetbyID
router.post('/getStudyGroupByID', (req, res) => {
    StudyGroup.findOne({'_id': req.body.StudyGroupID})
    .then(studyGroup => {
        return res.json(studyGroup);
    })
    .catch(err => res.status(404).json({noStudyGroupsFound: 'no StudyGroup found'}));
})

//Create Group
router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {
    const newStudyGroup = new StudyGroup({
       startTime: req.body.startTime,
       course: req.body.course,
       description: req.body.description,
       leader: req.user.name,
       members: [req.user._id]
    });
    newStudyGroup.save;

    return res.json(newStudyGroup);
})
//Update Group

//Delete Group

//Add student

//Remove student 

