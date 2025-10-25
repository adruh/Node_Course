const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/academy_database')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Could not connect to MongoDB', err);
});


const couseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    published_date: { type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
});
// model
const Course = mongoose.model('Course', couseSchema);
async function createCourse(){
    const course = new Course({
        name: 'SQL Course',
        creator: 'Lavanya',
        isPublished: true,
        rating: 4.2
    });
    const result = await course.save();
    console.log(result);
}
// createCourse();

async function getCourses(){
    const courses = await Course
    .find({rating: {$in: [4.0]}})
    .select({name: 1, creator: 1});
    console.log(courses);
}

// getCourses();

// update course
async function updateCourse(id){
    const course = await Course.findById(id)
    if(!course) return;
    course.name = 'Python Course';
    course.creator = 'Steve';
    const result = await course.save();
    console.log(result);
    }
// updateCourse('68f74f273420b3f155d79637');

// Delete course
async function deleteCourse(id){
    let result = await Course.findByIdAndDelete(id);
    console.log(result);
}
deleteCourse('68f74f273420b3f155d79637');