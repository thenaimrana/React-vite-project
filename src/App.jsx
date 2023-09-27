import ConditionIFElse from "./assets/component/ConditionIFElse";
import ContactForm from "./assets/component/ContactForm";
import Footer from "./assets/component/Footer";
import Header from "./assets/component/Header";
import Hero from "./assets/component/Hero";
import JsxLoop from "./assets/component/JsxLoop";
import SwitchCondition from "./assets/component/SwitchCondition";


const App = () => {

  const number = 50;
  const mark = 80;
  const city =["Dhaka", "London","Delhi","Kolkata"]


  return (
    <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
      <JsxLoop/>
      <ConditionIFElse/>
      <br />
      <h1>Switch Conditional</h1>
      <SwitchCondition/>

    <br/><br/>
      <button onClick={()=>alert("hello")}>Submit</button>

      <h1 style={{color:"red"}}>Hello world</h1>

      {number==50?<h1>Yor are Right</h1>:<h1>Your are Rong</h1>}
      {number!==50?<h1>Yor are Right</h1>:<h1>Your are Rong</h1>}



    <h1 style={{textAlign:"center"}}>Jsx IIF Immideate involve function</h1>

 
 {/* {(()=>{
  if(mark>=80 && mark<100){
    return "A+"
  }
 })} */}



    </div>
  );
};

export default App;