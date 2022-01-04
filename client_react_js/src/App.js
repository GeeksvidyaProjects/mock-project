import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from "./components/Home";

import { BrowserRouter,Route,Routes,Switch,Redirect } from "react-router-dom";
const App = ()=>(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
  </Switch>
  </BrowserRouter>

)

export default App;



// import { Link,withRouter } from 'react-router-dom';


// const  =(props)=> {
   
//     const {history} = props
//     console.log(history) 
//     const click1 = ()=>{
//        history.replace("/c1")
//        console.log("cliked")
//     }

//     const click2 = ()=>{
//         history.replace("/c2")
//         console.log("cliked")
//      }
  
//     return (
//        <div>
//        {/* <Link to={"/api"}>
//         <h1>hello world</h1>
//         </Link> */}
         
//         <h2 onClick={click1}>click me c1</h2>
//         <h2 onClick={click2}>click me c2</h2>
       
//        </div>
//     )

// }





// export default withRouter(Component1);

