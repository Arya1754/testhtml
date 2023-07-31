const courseClick = document.querySelector('.courseclick')
const right_coloumn = document.querySelector('.right_coloumn')
const addCourse_wrapper = document.querySelector('.addcourse_form_wrapper')
const submit = document.querySelector('.submit')
const allCourses = document.getElementById('courses')
const course_name_input = document.querySelector('.course_name_input')
const course_name_output = document.querySelector('.course_name_output')
const left_coloumn = document.querySelector('.left_coloumn')
const dots = document.querySelectorAll('.dots')
const year_input =document.querySelector('.year_input')
const year_output = document.querySelector('.year_output')
const perCourse = document.querySelector('.course1')
const everyCourse = document.querySelectorAll('.courses')
let count = 0
Number(count)



function addingcourses(){
    courseClick.addEventListener("click", ()=>{
        addCourse_wrapper.classList.add("show")
        
        right_coloumn.classList.add("blur")
        left_coloumn.classList.add("blur")


    })
    
    
}



addingcourses()

function submitFields(){
    submit.addEventListener("click",()=>{
        addCourse_wrapper.classList.remove("show")
        removeText()
        
        
        
        console.log(count)
    })

}
submitFields()



function removeText(){
    const text = document.querySelector('.middle')
    console.log(course_name_input.value)
    console.log(year_input.value)
    if(course_name_input.value!="" && year_input.value!=""){
        console.log("done")
        text.classList.add("hidden")
        takeCourseInput()
        takeYearInput()
        count++
        createNewCourse()
        blur()
    }else{
        alert("PLEASE ENTER COURSE NAME OR CLASS!!")
        
        blur()
    }
    

}

function takeCourseInput(){
 
    course_name_output.innerText = course_name_input.value.toUpperCase()
    console.log(course_name_input.value)
    course_name_input.value=""
}

function takeYearInput(){
   
    year_output.innerText = year_input.value.toUpperCase()
    console.log(year_input.value)
    year_input.value=""
}







function createNewCourse(){
   
   
    const deepCopy = perCourse.cloneNode(true);
    deepCopy.classList.remove("sample_course")
    deepCopy.classList.add("course1")
    deepCopy.classList.add("newclass")
    
    
   
    takeCourseInput()
    takeYearInput()
    allCourses.appendChild(deepCopy);
    console.log("working")
    allCourses.classList.remove("hidden")
    



   
   
}

function blur(){
    right_coloumn.classList.remove("blur")
    left_coloumn.classList.remove("blur")
}

const newclass = document.querySelector('.newclass')

//dots
// allCourses.addEventListener("click", ()=>{
//     console.log("hi")
// })

// perCourse.forEach(course=>{
//     course.addEventListener("click", ()=>{
//         console.log("hi")
//     })
// })

// dots.forEach(dot => {
//     dot.addEventListener('click', () => {
//       // Your click event function code goes here
//       console.log("You clicked on dots!");
//       // Add any other actions you want to perform when dots are clicked
//     });
//   });


everyCourse.forEach(course=>{
    course.addEventListener("mouseover", (e)=>{
        var souce = e.target
        console.log(souce.innerText)
    })
})