//Reverse a String
let company = "Testleaf"
let reverse = "";
console.log ("The length of the String is " + company.length);

for(let i = company.length-1;i>=0;i--)
{
    reverse = reverse+company[i];
}
console.log ("The reverse string is " +reverse);

