var frontend = {
    q1: [
        'What are some of the key differences between ES5 and ES6 in JavaScript?',
        ''
    ],
    q2: [
        'Can you explain the concept of closures in JavaScript, and provide an example of how you might use them in a project?',
        ''
    ],
    q3: [
        'How would you approach debugging a complex JavaScript application, and what tools or techniques would you use to help you find and fix bugs?',
        ''
    ],
    q4: [
        'How do you optimize the performance of a web page, and what tools or techniques do you use to measure performance?',
        ''
    ],
    q5: [
        'Can you explain the differences between synchronous and asynchronous code in JavaScript, and provide an example of each?',
        ''
    ],
    q6: [
        'What are some of the key features and benefits of using a modern JavaScript framework like React or Angular for building complex web applications?',
        ''
    ],
    q7: [
        'How do you ensure that your web applications are accessible to users with disabilities, and what tools or techniques do you use to test for accessibility?',
        ''
    ],
    q8: [
        'Can you explain the concept of the event loop in JavaScript, and how it affects the way that code is executed in the browser?',
        ''
    ],
    q9: [
        'How would you go about testing a JavaScript application, and what tools or techniques would you use to ensure that the application is functioning correctly?',
        ''
    ],
    q10: [
        'Can you provide an example of a project you have worked on where you used JavaScript to solve a particularly challenging problem, and explain your thought process and approach to solving the problem?',
        ''
    ],
    q11: [
        'How do you implement responsive design in a web application, and what tools or techniques do you use to ensure that the application looks good on different devices and screen sizes?',
        ''
    ],
    q12: [
        'Can you explain the concept of promises in JavaScript, and provide an example of how you might use them in a project?',
        ''
    ],
    q13: [
        'What are some common security vulnerabilities in JavaScript applications, and how do you prevent them from being exploited?',
        ''
    ],
    q14: [
        'How do you manage state in a complex JavaScript application, and what tools or techniques do you use to help you keep track of state changes?',
        ''
    ],
    q15: [
        'Can you explain the difference between server-side rendering and client-side rendering in a web application, and provide an example of when you might use each approach?',
        ''
    ],
    q16: [
        'Can you explain the concept of hoisting in JavaScript, and how it affects the way that code is executed in the browser?',
        ''
    ],
    q17: [
        'How do you ensure that your web applications are accessible to users with disabilities, and what tools or techniques do you use to test for accessibility?',
        ''
    ],
    q18: [
        'How do you manage dependencies in a JavaScript project, and what tools or techniques do you use to ensure that your project is using the most up-to-date and secure dependencies?',
        ''
    ],
    q19: [
        'Can you provide an example of a project you have worked on where you used JavaScript to implement an innovative or cutting-edge feature, and explain your thought process and approach to implementing the feature?',
        ''
    ],
    q20: [
        'How do you stay up-to-date with the latest trends and best practices in JavaScript development, and what resources or communities do you rely on for learning and professional development?',
        ''
    ]
}
var frontend_t = {
    q1: [
        'what is JavaScript?',
        'Javascript is a lightweight, interpreted, object oriented programming language,\
        it allows you to add interactivity to static HTML web pages,\
        Netscape, Internet Explorer, and other web browsers includes the\
        languge general purpose core.'
    ],
    q2: [
        '',
        `- it runs in the browser,
            framworks, Rich user Interface, quick feedback,
            Interactive enhancement`,
    ],
    q3: [
        '',
        `Cross Platform,
        Open source,
        Object Oriented,
        Integration with various front-end and back-end technologies`
    ],
    q4:[
        'when should generators be used in ES6?',
        `When one want to move out of a functions execution, one should use
        generators, Generators are also good for controlling asynchronous call
        outsode the code.`
    ],
    q5: [
        'why are promises used in javascript?',
        `Promises help in managing asynchrinous operations, such as server requests `,
        `Promises are used to handle asynchronous actions in a code,
        it's used to handle codes that take a while to run and return data,
        without interfering with the code normal execution stack`
    ],
    q6: [
        '',
        `primitive, composite, trivial data types`,
        `string, number, boolean, array, objects, function, null, undefined`
    ],
    q7: [
        '',
        `Because they are functions declerations but with shorter syntax, 
        it's a function literal, it binds the value of this to it `
    ]
}

// how can object destructuring set default values

// Async call Example
console.log("1");
 cps("2", function cps_step2(val2){
    console.log(val2);
    cps("3", function cos_step3(val3){
        console.log(val3);
    })
    console.log("4");
 });
 console.log("5");
 //1 5 2 4 3
 function cps(val, callback) {
    setTimeout(function () {
        callback(val);
    }, 0);
 }

 const introspection = {
    intro () {
        console.log('i think therefore i am')
    }
 }

 for( const key of Object.keys(introspection)){
    console.log(introspection.intro)
 } 