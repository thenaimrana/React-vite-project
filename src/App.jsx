import ConditionIFElse from "./assets/component/ConditionIFElse";
import ContactForm from "./assets/component/ContactForm";
import Footer from "./assets/component/Footer";
import Header from "./assets/component/Header";
import Hero from "./assets/component/Hero";
import IIF from "./assets/component/IIF";
import JsxLoop from "./assets/component/JsxLoop";
import Logicalandand from "./assets/component/Logicalandand";
import SwitchCondition from "./assets/component/SwitchCondition";
import TernaryCondition from "./assets/component/TernaryCondition";
import Props from './assets/component/Props'





const App = () => {

  const number = 50;
  const city =["Dhaka", "London","Delhi","Kolkata"]

  const ItemObj={
    name:"Naim Rana",
    age: 19,
    Dist: "Jamalpur",
    Divition:"Mymensingh"
  }

  return (
    <div>

      {/* <Header/> */}
      {/* <Hero /> */}
      {/* <ContactForm/> */}
      {/* <Footer/> */}
      {/* <JsxLoop/> */}
      {/* <ConditionIFElse/> */}
      {/* <br /> */}
      {/* <h1>Switch Conditional</h1>
      <SwitchCondition/> */}
      {/* <TernaryCondition/> */}
      {/* <Logicalandand/> */}
      {/* <IIF/> */}

      <Props item={ItemObj} />
      




    {/* <br/><br/>
      <button onClick={()=>alert("hello")}>Submit</button>

      <h1 style={{color:"red"}}>Hello world</h1>

      {number==50?<h1>Yor are Right</h1>:<h1>Your are Rong</h1>}
      {number!==50?<h1>Yor are Right</h1>:<h1>Your are Rong</h1>}  */}






    </div>
  );
};

export default App;