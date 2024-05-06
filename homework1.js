/* Job vacancy
- Patvirtintų kvalifikacijų prieinamumas (Availability of confirmed qualifications).
- Darbo patirtis (Having work experience).
- Gebėjimas dirbti komandoje (Teamwork skills).
- Kūrybiškumas (Creativity).
*/

let confQualifications = true;
let workExperience = true;
let teamworkSkills = true;
let creativity1 = true;

let solutionJob = confQualifications && workExperience && teamworkSkills && creativity1;

if (solutionJob) { 
    console.log("You got the job.");
} else { 
    console.log("You are not suitable for this job."); 
}


workExperience = false;
solutionJob = confQualifications && workExperience && teamworkSkills && creativity1;
if (solutionJob) { 
    console.log("You got the job.");
}   else { 
    console.log("You are not suitable for this job."); 
}

// ND - visos 128 kombinacijos

console.log(" --- 1 --- ");
console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && true && false && false);
console.log(true && false && true && true);
console.log(true && false && true && false);
console.log(true && false && false && true);
console.log(true && false && false && false);
console.log(false && true && true && true);
console.log(false && true && true && false);
console.log(false && true && false && true);
console.log(false && true && false && false);
console.log(false && false && true && true);
console.log(false && false && true && false);
console.log(false && false && false && true);
console.log(false && false && false && false);  //16

console.log(" --- 2 --- ");
console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && true && false || false);
console.log(true && false && true || true);
console.log(true && false && true || false);
console.log(true && false && false || true);
console.log(true && false && false || false);
console.log(false && true && true || true);
console.log(false && true && true || false);
console.log(false && true && false || true);
console.log(false && true && false || false);
console.log(false && false && true || true);
console.log(false && false && true || false);
console.log(false && false && false || true);
console.log(false && false && false || false);  //32

console.log(" --- 3 --- ");
console.log(true && true || true && true);
console.log(true && true || true && false);
console.log(true && true || false && true);
console.log(true && true || false && false);
console.log(true && false || true && true);
console.log(true && false || true && false);
console.log(true && false || false && true);
console.log(true && false || false && false);
console.log(false && true || true && true);
console.log(false && true || true && false);
console.log(false && true || false && true);
console.log(false && true || false && false);
console.log(false && false || true && true);
console.log(false && false || true && false);
console.log(false && false || false && true);
console.log(false && false || false && false);  //48

console.log(" --- 4 --- ");
console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || true);
console.log(true && true || false || false);
console.log(true && false || true || true);
console.log(true && false || true || false);
console.log(true && false || false || true);
console.log(true && false || false || false);
console.log(false && true || true || true);
console.log(false && true || true || false);
console.log(false && true || false || true);
console.log(false && true || false || false);
console.log(false && false || true || true);
console.log(false && false || true || false);
console.log(false && false || false || true);
console.log(false && false || false || false);  //62

console.log(" --- 5 --- ");
console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || true && false && false);
console.log(true || false && true && true);
console.log(true || false && true && false);
console.log(true || false && false && true);
console.log(true || false && false && false);
console.log(false || true && true && true);
console.log(false || true && true && false);
console.log(false || true && false && true);
console.log(false || true && false && false);
console.log(false || false && true && true);
console.log(false || false && true && false);
console.log(false || false && false && true);
console.log(false || false && false && false);  //80

console.log(" --- 6 --- ");
console.log(true || true && true || true);
console.log(true || true && true || false);
console.log(true || true && false || true);
console.log(true || true && false || false);
console.log(true || false && true || true);
console.log(true || false && true || false);
console.log(true || false && false || true);
console.log(true || false && false || false);
console.log(false || true && true || true);
console.log(false || true && true || false);
console.log(false || true && false || true);
console.log(false || true && false || false);
console.log(false || false && true || true);
console.log(false || false && true || false);
console.log(false || false && false || true);
console.log(false || false && false || false);  //96

console.log(" --- 7 --- ");
console.log(true || true || true && true);
console.log(true || true || true && false);
console.log(true || true || false && true);
console.log(true || true || false && false);
console.log(true || false || true && true);
console.log(true || false || true && false);
console.log(true || false || false && true);
console.log(true || false || false && false);
console.log(false || true || true && true);
console.log(false || true || true && false);
console.log(false || true || false && true);
console.log(false || true || false && false);
console.log(false || false || true && true);
console.log(false || false || true && false);
console.log(false || false || false && true);
console.log(false || false || false && false);  //112

console.log(" --- 8 --- ");
console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || true || false || false);
console.log(true || false || true || true);
console.log(true || false || true || false);
console.log(true || false || false || true);
console.log(true || false || false || false);
console.log(false || true || true || true);
console.log(false || true || true || false);
console.log(false || true || false || true);
console.log(false || true || false || false);
console.log(false || false || true || true);
console.log(false || false || true || false);
console.log(false || false || false || true);
console.log(false || false || false || false);  //128

console.log(" Kaina su PVM ");

// aaSuPVM
// bbSuPVM

const aa = 100;
const bb = 150;
const cc = 543;

function price(value) {
    const PVM = 21;
    const pricIncrease = 1 + PVM / 100;
   // const priceForSale = value + value * PVM;
   const priceForSale = value * pricIncrease;

    return priceForSale;
}

console.log(price(aa));     //121
console.log(price(bb));     //181.5
console.log(price(cc));     //657.03


console.log(" -- BMI -- ");
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

//console.log("BMI Mark = ", BMIMark);
//console.log("BMI John = ", BMIJohn);

if (BMIMark > BMIJohn) { 
    console.log("Mark's BMI (", BMIMark, ") is higher than John's (", BMIJohn, ").");
} else { 
    console.log("John's BMI (", BMIJohn, ") is higher than Mark's (", BMIMark, ")."); 
}

console.log(" ----- ");
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) { 
    console.log("Mark's BMI (", BMIMark, ") is higher than John's (", BMIJohn, ").");
} else { 
    console.log("John's BMI (", BMIJohn, ") is higher than Mark's (", BMIMark, ")."); 
}
