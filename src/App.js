import React from 'react';
import data from './componentes/Data/data';
import Header from './componentes/front/Header';
import { BrowserRouter as Router } from 'react-router-dom';



const App = () => {
   const {produtosItems} =data;

  return(
     <div>
        <Router>
           <Header />
       </Router> 
     </div>
  )
}


export default App