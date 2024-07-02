
/*
let lecture = 10;
let section = 3;
let title = "JavaScript";

const course = {
     lecture : 10,
     section : 3,
     title : "JavaScript",
     notes : { 
        introduction : "Welcome to JavaScript course"
     },
     enroll(){
        console.log("You are successfully enrolled."); 
     }
    }

    // function enroll (){
    //     console.log("You are successfully enrolled.");
    // }

    course.enroll();
    console.log(course);
    course.price = 999;
    

    //Factory Function
   
    function createCourse(){
        const course = {
            lecture : 10,
            section : 3,
            title : "JavaScript",
            notes : { 
               introduction : "Welcome to JavaScript course"
            },
            enroll(){
               console.log("You are successfully enrolled."); 
            }
           }
           return course;
    }
    const course = createCourse();
    course.enroll();
    
    
    */

      //Factory Function
    function createCourse(title){
        return {
            title : title,
            enroll(){
               console.log("You are successfully enrolled."); 
            }
           }
        
    }
    const newcourse = createCourse("JavaScript");
    //course.enroll();
    //console.log(course);
    
  
    //Constructor Function
    function Course(title){
        this.title = title,
        this.enroll = function(){
         console.log("You are successfully enrolled.");
        }
    }
    const course = "Jewefn";  //string literal
    
    //new keyword is automatically return the  object of this keyword
    /*
    const course = new Course("JavaScript");
    delete course.title;
    course.checkEnrollment = function(){
      console.log("30 Users are enrolled.");
    }
    course.enroll();
    console.log(course);

    
 const course = new Course("JavaScript");
 console.log(course.constructor);
 console.log(newcourse.constructor);
 */