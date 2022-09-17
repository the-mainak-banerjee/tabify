import NewTab from "./pages/NewTab";
import './app.css'
import UserOnboarding from "./pages/userOnboarding/UserOnboarding";
import { useEffect, useState } from "react";


function App() {
  const [name,setName] = useState(null)

  useEffect(() => {
    setName(localStorage.getItem('tabify-name'))
  },[])

  return (
    <div className='app'>
      {name === null
        ? (
          <UserOnboarding/>
          )
        : (
          <NewTab/>
        )
      }
    </div>
  );
}

export default App;
