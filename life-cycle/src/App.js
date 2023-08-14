import React,{useState} from 'react';
import './App.css';
import User from "./RenderMethod1.js";
import Users from "./RenderMethod2.js";
import Mount from "./ComDidM.js";
import Update from "./ComDidUpdate.js";
import ShouldComUpdate from "./ShouldComUpdate.js"
import Unmount from "./CompDidUnmount.js"
function App() {

  const [name,setName] = useState("dolat")
  // return (
  //   <div className="App">
  //   <h6>props is update then our render method is also update</h6>
  //   <User name={name}/>
  //   <button onClick={()=>setName("jangir")}>update name</button>
  //   </div>
  // );

    // when we use state for updated render
  //  return (
  //   <div className="App">
  //   <h6>state is update then our render method is also update</h6>
  //   <Users />
  //  {/* <button onClick={()=>setName("jangir")}>update name</button>*/}
  //   </div>
  // );
  // return(
  //   <div className="App">

  //     <Mount/>
  //   </div>
  //   )

   // return(
   //  <div className="App">

   //    <Update/>
   //  </div>
   //  )

  // return(
  //   <div className="App">

  //     <ShouldComUpdate/>
  //   </div>
  //   )

   return(
    <div className="App">

      <Unmount/>
    </div>
    )
}

export default App;
