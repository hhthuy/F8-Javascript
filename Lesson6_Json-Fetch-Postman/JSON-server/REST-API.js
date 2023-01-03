var listCourseBlock = document.querySelector('#list-courses');
var courseAPI = 'http://localhost:3000/courses';

function start() {
    //1. Lay ra Courses
    // getCourses(function(courses){//callback -> function(course)
    //     //Nhan API hien thi Object (DOM)
    //     console.log(courses);//(6) [{…}, {…}, {…}, {…}, {…}, {…}]

    //     //2. Render UI: Nhan API courses -> reder View HTML "list-courses"
    //     renderCourses(courses);
    // });

     //Shorthand
     getCourses(renderCourses);//getCourses() nhan tham so la function -> renderCourses() cung la funtion -> viet tat
     handleCreateForm();
    }
start()

//Function
function getCourses(callback) {//thanh cong
    fetch(courseAPI)
        .then(function (response) {
            return response.json();//
        })
        .then(callback)// callback lay getCourses(function (response){})

}
//Gui di request de Tao moi course ->  dung POST vs phuong thuc fetch()
function createCourse(data, callback){
    var options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)//Dl muon gui di
    };
    fetch(courseAPI, options)
        .then(function(response){
            response.json()
        })
        .then(callback)//

        
}

//
function handleDeleteCourse(id){
    var options = {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        
    };
    fetch(courseAPI+ '/' + id, options)
        .then(function(response){
            response.json()
        })
        .then(function(){//Xoa xong > render lai
            getCourses(renderCourses);
        });
}
function renderCourses(courses) {

    var htmls = courses.map(function (course) {
        return `<li>
        <h3> ${course.name}</h3>
        <p>${course.description}</p>
        <button id="delete" onclick="deleteCourse(${course.id})">Delete</button>
        </li> 
            `
    });

    listCourseBlock.innerHTML = htmls.join('')
}


//Add data
function handleCreateForm(){
    var btnCreate = document.querySelector("#create")
    btnCreate.onclick = function(){
        //1. Lay ra name va desc
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        //console.log(desc)

        //2. Gui di request de tao moi dung POST vs phuong thuc fetch()
        var formData = {
            name:name,
            description:description
        };
        
        createCourse(formData, function(){
            getCourses(renderCourses);//get lai list moi
        });

    }

}

