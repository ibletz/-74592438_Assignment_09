/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

const getAllPosts = async() => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await posts.json();
    return postsData;
}

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

const getAllUsers = async() => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await users.json();
    return userData;
}

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

const getComments = async(postID) => {
    const allComments = await fetch("https://jsonplaceholder.typicode.com/comments");
    const commentData = await allComments.json();
    const filteredComments = commentData.filter((comment) => {
        return comment.id === postID;
    });

}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

const getUser = async(userID) => {
    const allUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await allUsers.json();
    const filteredUser = userData.filter((user) => {
        return user.id === userID;
    });

}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

const getTodosForUser = async(userID) => {
    const allTodos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoData = await allTodos.json();
    const userTodos = todoData.filter((todo) => {
        return todo.userId === userID;
    });

}
