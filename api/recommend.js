import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const { cutoff, location, category, department } = req.query;
    const filePath = path.join(process.cwd(), 'data', 'colleges.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const colleges = JSON.parse(jsonData);

    // Filtering logic
    const filteredColleges = colleges.filter(college => 
        (!cutoff || college.cutoff <= parseFloat(cutoff)) &&
        (!location || college.location === location) &&
        (!category || college.category === category) &&
        (!department || college.department === department)
    );

    res.status(200).json(filteredColleges);
}
