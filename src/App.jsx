import React from 'react'
import './App.css';
import { useDispatch, useSelector } from "react-redux";
//import { getUser } from "./redux/reducers/userSlice";
import { getNasa } from "./redux/reducers/nasaSlice";


function App() {

  const dispatch = useDispatch();

  const [the , setThe] = React.useState(false)
  //--------Get nasas data-----------------------------
  const  nasa  = useSelector((state) => state.nasa);
  React.useEffect(() => {
    dispatch(getNasa()); 
    setThe(true)
  }, [dispatch]);

  const d = Object.values(nasa)
  //const nasa = useSelector((state) => state.nasa);

  //---------------------------------------------------------------------

  return (
    <div className="App">
     {/* {user.firstName} */}
    {the && Object.keys(nasa).length !== 0 ? console.log(d) : console.log("NOthing")  }
    </div>
  );
}

export default App;
