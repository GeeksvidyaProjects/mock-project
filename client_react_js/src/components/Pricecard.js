import React from "react";
import Imag from "../assets/pricecard.png";
class Price extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        
        
        
        <div style={{width:"250px",height:"350px",borderRadius:'5px',boxShadow:"5px 5px #73afc9",margin:"15px",border:"1px solid #7900FF"}}>

            <center>
                <table style={{height:"350px"}}>
                    <tr>
                        <td style={{}}>
                            <center>
                            <b>{this.props.mode}</b>
                            </center>
                        </td>
                    </tr>

                    <tr>
                        <td style={{}}>
                        <center>
                            <b>{this.props.price+" "}Rs</b>
                            </center>
                        </td>
                    </tr>

                    <tr>
                        <td style={{height:"150px"}}>
                        <center>
                            <img src={Imag} alt="pic" width="180px" height="150px"></img>
                            </center>
                        </td>
                    </tr>


                    <tr>
                        <td >
                        <center>
                            <button style={{width:"100px",height:"30px",border:"2px solid #7900FF",color:"#7900FF",borderRadius:"6px"}}><b>Rigister</b></button>
                            </center>
                        </td>
                    </tr>
                </table>

            </center>

        </div>
        
        
        
        );
    }
}

export default Price;