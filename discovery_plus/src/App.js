

import AllRouter from "./Components/AllRouter/router";
import { Footer } from "./Components/footer/Footer";
import { Navbar } from "./Components/LandingPage/navbar";
import RouterLoging from "./Components/Login&Signup/Router";

function App() {

  return (
    <div>
     <AllRouter/>
     <RouterLoging/>
     <Footer/>
    </div>
  );
}

export default App;