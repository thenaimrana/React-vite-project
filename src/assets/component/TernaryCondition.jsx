//class-15 JSX conditional Rendarign Ternary Operator

import React from 'react';

const TernaryCondition = () => {

    const status = false;
    return (
        <div>
            <h1>Ternary operator Conditional</h1>
            <h3>Logical and and Conditional</h3>
            
            {
                status?
                <button>Logout Buttton</button>
                :
                <button>Login Buttton</button>
            }
        </div>
    );
};

export default TernaryCondition;