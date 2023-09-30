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
import ClickEvent from "./assets/component/ClickEvent";
import FormSumit from "./assets/component/FormSumit";
import UseState from "./assets/component/UseState";






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

      <Header/>
      <Hero title="My Name is Naim" des="I live in Jamalpur" />
      <ContactForm/>
      <Footer/>
      <JsxLoop/>
      <ConditionIFElse/>
      <br />
      <h1>Switch Conditional</h1>
      <SwitchCondition/>
      <TernaryCondition/>
      <Logicalandand/>
      <IIF/>

      <Props item={ItemObj} />
      <ClickEvent/>
      <FormSumit/>
      <UseState/>





    <br/><br/>

  

      <h1 style={{color:"red"}}>Hello world</h1>

      {number==50?<h2>Yor are Right</h2>:<h2>Your are Rong</h2>}
      {number!==50?<h2>Yor are Right</h2>:<h2>Your are Rong</h2>} 






    </div>
  );
};

export default App;