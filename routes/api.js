const express = require('express');
const router = express.Router();
const colleges = require('../colleges.json'); // Your JSON data

router.get('/recommend', (req, res) => {
    const { cutoff, location, category, department } = req.query;
    // Implement filtering logic based on query parameters
    const filteredColleges = colleges.filter(college => 
        college.cutoff <= cutoff &&
        college.location === location &&
        college.category === category &&
        college.department === department
    );
    res.json(filteredColleges);
});

module.exports = router;
