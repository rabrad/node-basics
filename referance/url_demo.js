const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Pathname
console.log(myUrl.pathname);

// Serialize Query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.href);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${value}: ${name}`);
});
/**
    100: id
    active: status
    123: abc 
    */
