import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./images/logo2.jpg";
import man from "./images/pizza-man.jpg";
import Card from "./components/Card";
import Deal from "./components/Deal"
import Offer from "./components/Offer";
import small from "./images/small.jpg";
import medium from "./images/large.jpg";
import large from "./images/medium.jpg";
import Footer from "./components/Footer";
import thankyou from "./images/thanku.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={logo} className="logo" alt="pizza" />
      <h1 className="heading">Pizza World</h1>
      <br />
      <p className="content">
        Pizza is a worldwide favorite. The reason for pizza spread is that you
        can add anything to it and eat it anytime of the day and anywhere. The
        pizza originated in Italy and it is one of the favorite foods for adults
        and children. It was originally dough with topping of any ingredients as
        meat or vegetables that baked in the oven. Pizza developed to become
        more organized as Italians added sauce and cheese mozzarella.
      </p>
      <h2 className="caption">"We can only wish to eat pizza forever and ever".</h2>
      <img src={man} className="chef" alt="chef"/>
      <Card/>
      <br/>
      <Deal/>
      <img src={small} className="small" alt="small-pizza"/>
      <img src={medium} className="medium" alt="medium-pizza"/>
      <img src={large} className="large" alt="large-pizza"/>
      <Offer/>
      <Footer/>
      <img src={thankyou} className="thanks" alt="Thank-you"/>
    </div>
  );
}

export default App;
