import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { Route , Routes } from "react-router-dom"
import Join from "./components/JoinPage/Join";
import JoinMail from "./components/JoinMail/JoinMail";



function App() {

  return (
    <Routes>
      <Route index element ={
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <JoinMail />
      <Footer />
    </div>
      } />
      <Route path={'/Join'} element ={
        <main>
          <Join />
        </main>
      } />
    </Routes> 
     );
  }

export default App;
