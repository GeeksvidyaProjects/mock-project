import React from "react";
import '../Styles/footer.css'


class Footer extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            
            <div style={{width:'100vw',backgroundColor:'orange',marginTop:'20px',minWidth:'400px'}}>
            

            <center>
            <div style={{width:'50%',backgroundColor:'yellow',minWidth:'400px',float:'left'}}>
                <center>
                   <table>
                       <tr>
                           <td>
                                <h1>InterFace</h1>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <div>
                                   <p>Dno 02932,AP</p>
                                   <p>India</p>
                                   <p>geeksVidya.Assosiate@gmail.com</p>
                                   <p>Ph :8142440166</p>
                               </div>
                           </td>
                       </tr>
                   </table>
                </center>
            </div>
            <div style={{width:'50%',backgroundColor:'pink',minWidth:'400px',float:'right'}}>
            <center>
                   <table>
                       <tr>
                           <td>
                                <h1>InterFace</h1>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <div>
                                   <p>Dno 02932,AP</p>
                                   <p>India</p>
                                   <p>geeksVidya.Assosiate@gmail.com</p>
                                   <p>Ph :8142440166</p>
                               </div>
                           </td>
                       </tr>
                   </table>
                </center>
            </div>
            </center>
            
           

            
            </div>
            
        );
    }
}

export default Footer;