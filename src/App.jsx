import ContactForm from "./assets/component/ContactForm";
import Footer from "./assets/component/Footer";
import Header from "./assets/component/Header";
import Hero from "./assets/component/Hero";


const App = () => {

  const number = 50;
  const mark = 80;
  const marks = 80;
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>

      <button onClick={()=>alert("hello")}>Submit</button>

      <h1 style={{color:"red"}}>Hello world</h1>

      {number==50?<h1>Yor are Right</h1>:<h1>Your are Rong</h1>}
      {number!==50?<h1>Yor are Right</h1>:<h1>Your are Rong</h1>}






      {(()=>{


        if(mark>=80 && mark<100){
          return <h1>A+</h1>
        }

        })()}




    </div>
  );
};

export default App;