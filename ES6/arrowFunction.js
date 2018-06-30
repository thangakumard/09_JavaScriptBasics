const square1 = function (number) {
    return number * number;
}

// If function has single parameter we can exclude the parentheses
const square2 = number => {
    return number * number;
}

// if you have zero parameter have to add empty parentheses
const square3 = () => {
    return number * number;
}

// if bosy of the function has only a single line, return keyword is not required and curly brackets also not required
const square4 = number => number * number;

const jobs = [
    {id:1, isActive : true},
    {id:2, isActive : true},
    {id:3, isActive : false}
]

const activeJobs = jobs.filter(function(job){return job.isActive;});
const activeJobs = jobs.filter(job => job.isActive); // Arrow function makes it simple

//In array functions don't rebind this keyword