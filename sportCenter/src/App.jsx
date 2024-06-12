import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Number from "./components/Numbers/number";
import SportClass from "./components/SportClass/sportClasses";
import Calculator from "./components/Calculator/calculator";
import Trainers from "./components/Trainers/trainer";
import Purchase from "./components/Purchase/purchase";
import SportReview from "./components/SportReview/sportReview";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";



import './App.css'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Number />

      <SportClass />
      <Calculator />
      <Trainers />

      <Purchase />
      <SportReview />
      <Contact />

      <Footer />

    </>
  )
}

export default App
