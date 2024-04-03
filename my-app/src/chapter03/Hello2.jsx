import React from "react";
import ReactDOM from "react-dom/client";

function Hello2() {
    return element;
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Inje',
    lastName: 'Lee'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

export default Hello2;