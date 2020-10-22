"use strict"

let submissions = [
    {
        name: "Jane",
        score:95,
        date:"2020-01-24",
        passed:true
    },
    {
        name: "Joe",
        score:77,
        date:"2018-05-14",
        passed:true
    },
    {
        name: "Jack",
        score:59,
        date:"2019-07-05",
        passed:false
    },
    {
        name: "Jill",
        score:88,
        date:"2020-04-22",
        passed:true
    }
    
]
// console.log(submissions);

//2. Declare a function called addSubmission

const addSubmission = (array, newName, newScore, newDate)=>{
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
     passed : newScore >=60 
    };
    array.push(newSubmission);
};
// addSubmission(submissions, "Gus", 32,"2020-12-03");
// console.log(submissions);

//3. Declare a function named deleteSubmissionByIndex

const deleteSubmissionByIndex = (array, index)=>{
    array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

//4. Declare a function named deleteSubmissionByName

const deleteSubmissionByName = (array, name)=>{
let index = array.findIndex((item)=>{
    return item.name === name;
});
deleteSubmissionByIndex(array, index);
};
// deleteSubmissionByName(submissions, "Gus");
// console.log(submissions);



//5. Declare a function named editSubmission 

const editScore = (array, index, score) => {
    let pass = array.passed
    if (score >= 60) {
       pass === true;
    //    return pass
    } else {
        pass ===false;
        // return pass
    }
    return array[index].score = score
    // array[index].pass=pass ;

};
//able to edit score but the passed doesn't edit too??
editScore(submissions, [3], 33);
console.log(submissions);
//just use FIND()?
// const editSubmission = (array, index,score)=>{


//*******COME BACK********* */



//6. Declare a function named findSubmissionByName

const findSubmissionByName = (array, name)=>{
    let submissionArray = array.find((submission)=>{
        return submission.name==name;
    });
    return submissionArray;
};
// console.log(findSubmissionByName(submissions, "Jill"));

//7. Declare a function named findLowestScore
//write notes


//Mitch's solution
const findLowestScore=(array)=>{
let currentLowestObject = array[0]
array.forEach((object)=>{
if (object.score < currentLowestObject.score){
currentLowestObject = object
};

});
return currentLowestObject;
};

// console.log(findLowestScore(submissions));

//8. Declare a function named findAverage

const findAverage =(array)=>{
    //use for loop to collect each objects score to add then divide by score.length
        let currentScore = 0
for (let object of array){
    currentScore =+ object.score;
};
return currentScore/array.length;

};
// console.log(findAverage(submissions));


//9. Declare a function named filterPassing 

const filterPassing = (array)=>{
    let newArray = array.filter((object)=>{
        return object.passed === true;
    });
    return newArray;
};

// console.log(filterPassing(submissions));

//10. Declare a function named filter90AndAbove

const filter90AndAbove =(array)=>{
  let grade = 90;
  return array.filter((object)=>{
return object.score >= grade;
  });
};
// console.log(filter90AndAbove(submissions));