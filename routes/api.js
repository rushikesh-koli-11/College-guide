const express = require('express');
const router = express.Router();
const colleges = require('../data/colleges.json');

router.get('/recommend', (req, res) => {
    const cutoff = parseInt(req.query.cutoff);
    const location = req.query.location;
    const category = req.query.category;
    const department = req.query.department;

    const filteredColleges = colleges.filter(college =>
        college.cutoff <= cutoff &&
        college.location === location &&
        college.category === category &&
        college.department === department
    );

    res.json(filteredColleges);
});

module.exports = router;
