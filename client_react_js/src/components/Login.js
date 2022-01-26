import React from "react";
import '../Styles/login.css';
import Image from '../assets/Logo.png'
import ring from '../assets/ring.png';
import circle from '../assets/circle.png';
import { Link,withRouter } from 'react-router-dom';

import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super();
        this.state={email:'',pass:'',emailErr:false,passErr:false}; 
        
    }

     border1='2px solid red';
     border2='2px solid black';
    verify=()=>{
        console.log(this.state.email);
        var emailrr=false;
        var email=this.state.email;
        var pass=this.state.pass;
        var passs=false;

        /// main


        if (email !== '') {
            console.log('----'+this.state.emailErr);
            
            
            const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            // var pattern = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            if (!pattern.test(email)) {
                emailrr=true;
                this.setState({emailErr:emailrr});
                console.log(!pattern.test(email));
                
            }else{
                this.setState({emailErr:false})
            }
          }else{

            this.setState({emailErr:true});
          }
          
        //// pass

        if (pass !== '') {

            var b = this.state.pass;
            var d = 0;
            var c = 0;
            try {
            if (1) {
                var patt1 = /[0-9]/g;
                c = b.match(patt1);
                c = c.join("");
                if (c.length > 0) {
                d = d + 1;
                }
        
                patt1 = /[a-z]/g;
                c = b.match(patt1);
                c = c.join("");
                if (c.length > 0) {
                d = d + 1;
                }
        
                patt1 = /[A-Z]/g;
                c = b.match(patt1);
                c = c.join("");
                if (c.length > 0) {
                d = d + 1;
                }
        
                if (d === 3) {
                this.setState({ passErr:false});
                passs=false;
                }else{
                    this.setState({passErr:true});
                    passs=true;
                }
            }
            } catch (e) {
                this.setState({ passErr: true});
                passs=true;
            }
         }else{

            this.setState({passErr:true});
            passs=true;
            }


        if(passs===true){
            console.log("give proper  pass");
        }

        if(emailrr===true){
            console.log("give proper rmail");
        }

        if(emailrr=== false && passs===false){
            this.getData();
        }
        

    }
    signup=()=>{
        console.log(this.props);
        this.props.history.push('/signup');
    }

    getData=()=>{
        console.log("getting data");
        var post={   
            "email_id":this.state.email, 
            "password":this.state.pass};
        axios.post("http://localhost:3001/users/Login",post
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })

        
    }


    email=(e)=>{

        this.setState({email:e.target.value});
        this.setState({emailErr:false,passErr:false});
    }


    pass=(e)=>{  
        this.setState({pass:e.target.value});
        this.setState({emailErr:false,passErr:false});
    }




    render(){
        return(

        
        <div style={{justifyContent:'center',alignItems:'center',flex:'1',width:'100%',paddingTop:'13vh'}}>
            <center>
                <div style={{backgroundColor:'#7900FF',minWidth:'300px',width:'60%',height:'70vh',border:'2px solid #7900FF',boxShadow:'5px  #7900FF'}}>
                    <div className="sideview">
                        <h2 >Welcome back !!! to InterFace</h2>
                        <h3 style={{color:'white'}}>Happy to see you !!!</h3>
                        <img src={Image} alt="Image" style={{width:'60%',marginTop:'5%'}}/>
                    </div>
                    <div className="mainview">

                        <center>
                        
                            <table style={{width:'210px'}}>
                                <tr>
                                    <td>
                                        <center>
                                        <h3 style={{color:'#7900FF'}}>Lets Login here !</h3>
                                        </center>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Enter Email Address</p>
                                        {/* {console.log(this.state.emailErr)} */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='text' name='email' onBlur={this.email} style={{height:'25px',width:'240px',border:"0.5",border: this.state.emailErr ? this.border1 :this.border2}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Enter Password</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type='password' name='pass' onBlur={this.pass} style={{height:'25px',width:'240px',border:'0.5',border: this.state.passErr ? this.border1 :this.border2}}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        
                                    </td>
                                </tr>
                                <tr >
                                    <td >
                                        <center>
                                        <button style={{marginTop:'10px',backgroundColor:'#7900FF',width:'240px',height:'30px',color:"white",marginBottom:'9px'}} onClick={this.verify}>Sign in !</button>
                                        <p><a href="#"> Forgot Password ? </a></p>
                                        </center>
                                        
                                    </td>
                                </tr>
                                <tr >
                                    <td >
                                     <div>
                                         <center>

                                         <p>(or)</p>
                                         <h4>New user  ??? Register Now</h4>
                                         <button style={{backgroundColor:'#7900FF',width:'80px',height:'30px',color:"white"}} onClick={this.signup}>Sign up !</button>
                                         </center>
                                     </div>
                                    </td>
                                </tr>
                                

                            </table>

                            </center>

                        

                    </div>
                </div>

            </center>


            <img src={circle }alt='cirlce' style={{position:'absolute',right:'0',top:'-20px',width:'30%',minWidth:'200px',zIndex:'-1'}}/>
            <img src={ring}alt='ring' style={{position:'absolute',left:'3%',bottom:'0',width:'30%',minWidth:'200px',zIndex:'-1',opacity:'0.8'}}/>
        
        </div>
        );
    }
}
export default withRouter(Login);