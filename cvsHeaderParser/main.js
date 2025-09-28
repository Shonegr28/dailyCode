// Define a function called getHeadings that takes one parameter: csv
function getHeadings(csv) {

    // Split the string at every comma (",")
    // This turns something like "name, age, city"
    // into an array: ["name", " age", " city"]
    // Then, use .map() to go through each item in the array
    // For every heading, apply .trim() to remove leading/trailing spaces
    // Finally, return the new cleaned array
    return csv.split(",").map(heading => heading.trim());
  }
  
  // Example usage:
  console.log(getHeadings("username , email , signup date "));
  // Output: ["username", "email", "signup date"]
  