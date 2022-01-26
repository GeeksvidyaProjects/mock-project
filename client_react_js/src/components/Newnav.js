import React from "react";
import "../Styles/newnav.css";
import Price from "./Pricecard";
import Logo from "../assets/Logo.png";
import Ham from "../assets/hambu.png";
class Newnav extends React.Component{
    constructor(){
        super();
        
        this.state={display:"none",toggle:false};
    }
    
    humtoggel=()=>{
        if(this.state.toggle===false){
            this.setState({toggle:true,display:"none"});
        }else{
            this.setState({toggle:false,display:""});
        }
    }
    render(){
        return(
        <div >
            

        <div style={{backgroundColor:"white", paddingLeft:"30px",paddingRight:"30px",color:"#7900FF",position:"fixed",width:"100%"}} className="lapnav">
            <center>
            <table style={{width:"90%"}} >
                <tr >
                    <td  style={{width:"60%"}}>
                        <div>
                            <table >
                                <tr>
                                    <td >
                                        <img src={Logo} width="100px" alt="Logo"></img>
                                    </td>
                                    <td>
                                        <h3 style={{marginLeft:"10px"}}>InterFace</h3>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                    <td>
                        <table style={{width:"100%"}}>
                            <tr>
                                <td style={{minWidth:"60px"}}>
                                    <b>Home</b>
                                </td>
                                <td style={{minWidth:"60px"}}>
                                    <b>About</b>
                                </td>
                                <td style={{minWidth:"60px"}}>
                                <b> Plans</b>
                                </td>
                                <td style={{minWidth:"60px"}}>
                                <b> Login</b>
                                </td>
                                <td style={{minWidth:"60px"}}>
                                <b> SignUp</b>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            </center>
            
        </div>




        <div style={{width:"100%",backgroundColor:"#bef0ff", paddingLeft:"30px",paddingRight:"30px",color:"#7900FF",zIndex:"3",top:"0",position:"fixed" }} className="mobnav">
            <center>
            <table style={{width:"90%"}} >
                <tr >
                    <td>
                        <center>
                        <div>
                            <table >
                                <tr>
                                    <td >
                                        <img src={Logo} width="100px" alt="Logo"></img>
                                    </td>
                                    <td>
                                        <h3 style={{marginLeft:"10px"}}>InterFace</h3>
                                    </td>
                                </tr>
                            </table>
                            
                        </div>
                        </center>
                    </td>

                </tr>
                <tr style={{display:this.state.display}}>
                    <td>
                        <table style={{width:"100%"}}>
                            <tr style={{height:"30px"}}>
                                <td >
                                    <center>
                                    <b>Home</b>
                                    </center>
                                </td>
                            </tr>

                            
                            <tr>
                                <td style={{height:"30px"}}>
                                <center>
                                    <b>About</b>
                                    </center>
                                </td>
                            </tr>

                            <tr>
                                <td style={{height:"30px"}}>
                                <center>
                                    <b>Plan</b>
                                    </center>
                                </td>
                            </tr>


                            <tr>
                                <td style={{height:"30px"}}>
                                <center>
                                    <b>Login</b>
                                    </center>
                                </td>
                            </tr>

                            <tr>
                                <td style={{height:"30px"}}>
                                <center>
                                    <b>Signup</b>
                                    </center>
                                </td>
                            </tr>

                            
                        </table>
                    </td>
                </tr>
            </table>
            </center>

            <div onClick={this.humtoggel} style={{position:"absolute",zIndex:"4",top:"25px",left:"25px",position:"fixed"}}>
            <img src={Ham} alt="ham"></img>
            </div>
            
        </div>

        </div>);
    }
}

export default Newnav;