// const point = [70,75,25,35,10,80,27];

// const newPoints=point.map(point =>{
//     return point +10;

// })

// console.log(newPoints);


const students = [
    {name:"ece", point:40},
    {name:'zeynep', point:30},
    {name:"suna", point:100},
    {name:"osman", point:65},
];


const newStudentsPoints=students.map(student => {
    if (student.point < 50)
        return student
    {
        student.point +=15;
        return student; 

        // return {name :student.name , point:student.point +15}
    }
    else
    {
        return student
    }
});

console.log(newStudentsPoints);