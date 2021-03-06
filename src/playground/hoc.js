import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don´t share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requiredtAthetication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please, make the login!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredtAthetication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="The are the details!"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="The are the details!"/>, document.getElementById('app'));