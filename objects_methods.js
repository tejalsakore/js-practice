//Objects and Methods

var student = {
    name: "Tejal",
    age: 20,
    courseList:[],
    loginCount: 30,
    googleSignedIn: true,
    buyCourse:function(courseName)
    {
        this.courseList.push(courseName);
    },
    getCourseCount:function()
    {
        return `${this.name} joined ${this.courseList.length} courses which are ${this.courseList}`
    }
};
student.buyCourse("Python");
student.buyCourse("React");
student.buyCourse("Angular");
console.log(student.getCourseCount());//Tejal joined 3 courses which are Python,React,Angular
