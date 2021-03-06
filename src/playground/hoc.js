// Higher Order Component (HOC)- A component (HOC) that renders another component
// - Reuse code
// - Render hijacking
// - Prop manipulation
// - Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// A plain old React component (to be wrapped)
const Info = (props) => (
    <div>
        <h1>This is Info component</h1>
        <p>The info is this: {props.info}</p>
    </div>
);

// // A plain old JS function that takes in a React component 
// // and returns a HOC that wraps that component
// const withAdminWarning = (WrappedComponent) => {
//     // return HOC
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is an admin only area!</p> }
//             <WrappedComponent {...props} />
//         </div>
//     )
// };

// // Create the HOC by calling the function
// const AdminInfo = withAdminWarning(Info);

// // Render the HOC
// ReactDOM.render(<AdminInfo isAdmin={false} info='This is the secret key: FFDTS' />, document.getElementById('app'));

const requireAuthentication = (WrappedComponent) => {
    // stateless functional component
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Please login to view this page!</p>
                )}
        </div>
    );
};

const AuthenticatedInfo = requireAuthentication(Info);

//ReactDOM.render(<AuthenticatedInfo info='Secret password: 7676gg'/>, document.getElementById('app'));
ReactDOM.render(<AuthenticatedInfo isAuthenticated={true} info='Secret password: 7676gg' />, document.getElementById('app'));