// class-16 Logical and and operator

// condition true hole show korbe na hole show korbe na
import React from 'react';

const Logicalandand = () => {
    const isLoggedIn = true;
    return (
        <div>
            <h1>Login Status</h1>
            {isLoggedIn && <button>LoginStatus</button>}
        </div>
    );
};
 
export default Logicalandand; 