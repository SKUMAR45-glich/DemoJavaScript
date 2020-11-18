//RegexJS Demo

function CheckNameUsingRegex(name) {
    let nameRegex = new RegExp(/^[A-Z][a-z]{2,}$/);

    if (nameRegex.test(name)) {
        console.log("Valid Name");
    }
    else {
        console.log("Invalid Name");
    }
}

CheckNameUsingRegex("Indal");
CheckNameUsingRegex("indal");