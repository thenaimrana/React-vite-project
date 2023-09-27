

const LoginStatusBtn=(status)=>{
    if(status){ 
        return <button>Logout Btn</button>
    }else{
        return <button>Login Btn</button>
    }
}

const ConditionIFElse = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Login Status</h1>
            {LoginStatusBtn(false)}
            {LoginStatusBtn(true)}

            <br/>
        </div>
    );
};

export default ConditionIFElse;