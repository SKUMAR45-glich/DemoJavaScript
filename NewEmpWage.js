//UC1

{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("Employee is Absent");
    }
       
    else
    {
        console.log("Employee is Present");
    }
}


//UC2

{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    let empHrs = 0;

    empCheck = Math.floor(Math.random() * 10) % 3;

    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;

        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;

        default:
            empHrs = 0;
    }

    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Emp Wage:" + empWage);
}



//UC3 Use of ForLoop

{
    let dogs = ["Bulldog", "Beagle", "Labrador"];


    //Old Way

    var allDogs = "";
    for (var i = 0; i < dogs.length; i++) {
        allDogs += dogs[i] + " ";
    }
    console.log("Old: " + allDogs)


    //New Way

    var allDogs = "";
    for (let dog of dogs) {
        allDogs += dog + " ";
    }
    console.log("New: " + allDogs)

}



//UC4 Use of While Loop

{
    let dogs = ["Bulldog", "Beagle", "Labrador"];
    let i = 0;
    var allDogs = "";


    //Old Way

    while (i < dogs.length) {
        allDogs += dogs[i++] + " ";
    }
    console.log("while: " + allDogs);

    //New Way
    i = 0;
    allDogs = "";
    do {
        allDogs += dogs[i++] + " ";
    } while (i < dogs.length)
    console.log("Do while: " + allDogs);
}

//UC5 Calculate Wages till Number Days or Total Working Hours per Month is Reached

{
    const MAX_HRS_IN_MONTH = 100;
    const NUM_OF_WORKING_DAYS = 10;
    const WAGE_PER_HOUR = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += empCheck;
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + "Emp Wage: " + empWage);

}