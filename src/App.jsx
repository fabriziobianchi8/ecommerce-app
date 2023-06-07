
import Navbar from "./Navbar";


function App() {
  
  const functionSaludar = ()=> {
    console.log("Hola como estas")
  }

  return <div>
   
    <Navbar />
    <h1 style={{color: "steelblue"}}> Hola </h1>

    <button onClick={functionSaludar}>Saludar </button>

    
  
  </div>
    
}

export default App;
