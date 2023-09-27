//class-17 Immidiate Involve function

import React from 'react';

const IIF = () => {
    const status = false;
    return (
        <div>
            
            <h1>Immediate involve function</h1>

            <h3>Login Button</h3>

        {/* {(()=>{

            if(status==true){
                return <button>Logout Button</button>
            }else{
                return <button>Login Button</button>
            }

        })()} */}
        {(()=>{
            if(status==true){
                return "True"
            }else{
                return "False"
            }
        })()}



        </div>
    );
};

export default IIF;