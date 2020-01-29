import React, { Fragment, useEffect ,useState } from 'react';
import Header from "./components/Header"
import Service_1 from "./components/Service_1"
import About_2 from "./components/About_2"
import Competence_3 from "./components/Competence_3"
import Creation_4 from "./components/Creation_4"
import Contact_5 from "./components/Contact_5"
import Footer from "./components/Footer"
import Loading from "./components/Loading"


const App = () => {

const [loading, setLoading] = useState(false)
useEffect(()=>{
  setTimeout(()=>{
    setLoading(true)
  },1000 )
})
if (loading === true){
  return (
    <Fragment>
      <Header />
      <Service_1 />
      <About_2 />
      <Competence_3 />
      <Creation_4 />
      <Contact_5 />
      <Footer />

    </Fragment>

  );
} else{
  return(
  
    <Loading/>
  
  );
  
}



  
}

export default App;
