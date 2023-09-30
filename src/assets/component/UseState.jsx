import  {useRef} from 'react';

const UseState = () => {

const MyImg = useRef();

const Change = ()=>{
    MyImg.current.src="https://media.istockphoto.com/id/137893309/photo/yoga-meditation-at-sunset.jpg?s=1024x1024&w=is&k=20&c=5DqGdDnQYM3chq67YwYCe8nq8QujM5GLp6JFPWLPp3c="
}
let style = {
    width: "400px",
    height: "400px"
}
    return (

        <div>
            <h1 className=''> UseState  diye InnerHTML Show</h1>
            <img style={style}  src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80" ref={MyImg} alt="" />

            <button onClick={Change}>Click</button>
        </div>
        
    );
};

export default UseState;