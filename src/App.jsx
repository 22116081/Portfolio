import Header from './Header.jsx'
import Student from "./Students.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home1.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'


function App(){

  
  return(
    <>
    <Header/>
    
<BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
     <Footer />
     

      
     </>
  )

}

export default App
