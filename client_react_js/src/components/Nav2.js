import React from 'react';
import '../Styles/nav2st.css'
class Nav2 extends React.Component{
    constructor(){
        super();
        this.state={navwid:'0'};
    }

     openbut=()=>{

        this.setState({navwid:'150px'});

     }

     closebut=()=>{
         this.setState({navwid:'0'});
     }

    

    render() {
        return (
            <div style={{width:'100vw'}}>
              <div >
                <center><p style={{paddingTop:'4px'}}>
                This is heading
                    </p>
                    </center>
            </div>
            <div style={{position:'absolute',top:'0',left:'0',zIndex:'3'}}>
                <p style={{paddingLeft:'5px'}} onClick={this.openbut}>open </p>
            </div>
            <div className='sideNav' style={{width:this.state.navwid}}>
                <div style={{width:'100%',textAlign:'right'}}>
                   <p style={{paddingRight:'15px'}} onClick={this.closebut}>close</p> 
                </div>
                

                
                <table style={{width:'100%'}}>
                    
                    <tr >
                       <td style={{textAlign:'center'}}>
                           <p >Home</p>
                        </td>
                    </tr>
                    <tr style={{textAlign:'center'}}>
                    <td>
                    <p>About</p>
                        </td>
                    </tr>
                    <tr style={{textAlign:'center'}}>
                    <td>
                    <p>Pricing</p>
                        </td>
                    </tr>
                </table>
                
            </div>
            </div>
        )
    }
}

export  default Nav2;