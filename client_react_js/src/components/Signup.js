import React from "react";
import '../Styles/signup.css';
import Image from '../assets/Logo.png'
import ring from '../assets/ring.png';
import circle from '../assets/circle.png';
import { Link,withRouter } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component{
    constructor(props){
        super();
        this.state={email:'',pass:'',name:'',confpass:'',nameErr:false,confpassErr:false,emailErr:false,passErr:false}; 
        
    }

     border1='2px solid red';
     border2='2px solid black';
    verify=()=>{
        console.log(this.state.email);


        var confmpasss=this.state.confpass;
        var pass=this.state.pass;
        var email=this.state.email;
        var z=this.state.name;

        var emailrr=false;
        var namerr=false;
        var passs=false;
        var confmpasssrr=false;

        ///name
        
        if(z.length<4){
            this.setState({nameErr:true});
            namerr=true;
        }else{
            this.setState({nameErr:false});
            namerr=false;
        }


        ////conformpass
        if(confmpasss===pass){
            this.setState({confpassErr:false});
            confmpasssrr=false;
        }else{
            this.setState({confpassErr:true});
            confmpasssrr=true;
        }



        /// mail


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

            if(namerr===true){
                console.log("give proper  name");
            }

        if(passs===true){
            console.log("give proper  pass");
        }

        if(confmpasssrr ===true){
            console.log("give proper  conform pass");
        }

        if(emailrr===true){
            console.log("give proper rmail");
        }

        if(emailrr=== false && passs===false && namerr===false && confmpasssrr===false ){
            
            
            this.getData();
            console.log("all ok");
        }
        

    }



    login=()=>{
        console.log(this.props);
        this.props.history.push('/login');
    }

    getData=()=>{
        console.log("getting data");
        var post={   
            "email_id":this.state.email, 
            "password":this.state.pass,
            "name":this.state.name};
        axios.post("http://localhost:3001/users/signin",post
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            if(res.data==="registered data"){
                console.log("Data inserted");
            }else{
                console.log("Please give Unique details");
            }
        })     
        
        
    }

    name=(e)=>{
        this.setState({name:e.target.value});
        this.setState({emailErr:false,passErr:false,nameErr:false,confpassErr:false});
    }

    email=(e)=>{

        this.setState({email:e.target.value});
        this.setState({emailErr:false,passErr:false,nameErr:false,confpassErr:false});
    }


    pass=(e)=>{  
        this.setState({pass:e.target.value});
        this.setState({emailErr:false,passErr:false,nameErr:false,confpassErr:false});
    }

    conformpas=(e)=>{

        this.setState({confpass:e.target.value});
        this.setState({emailErr:false,passErr:false,nameErr:false,confpassErr:false});

    }






    render(){
        return(

        
        <div style={{justifyContent:'center',alignItems:'center',flex:'1',width:'100%',paddingTop:'13vh'}}>
            <center>
                <div style={{backgroundColor:'#7900FF',minWidth:'300px',width:'60%',height:'70vh',border:'2px solid #7900FF',boxShadow:'5px  #7900FF'}}>
                    <div className="sideview">
                        <h2 >Appriciate Your Intrest in us !!</h2>
                        <h3 style={{color:'white'}}>Welcome to our community</h3>
                        <img src={Image} alt="Image" style={{width:'60%',marginTop:'5%'}}/>
                    </div>
                    <div className="mainview">

                        <center>
                        
                            <table style={{width:'210px'}}>
                                <tr>
                                    <td>
                                        <center>
                                        <h3 style={{color:'#7900FF'}}>Lets Register here !</h3>
                                        </center>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{paddingTop:'10px'}}>
                                        <div>
                                        <span>Enter Full Name</span>
                                        <input type='text' 
                                        name='email' 
                                        onChange={this.name} 
                                        style={{height:'25px',width:'240px',marginTop:'7px',border: this.state.nameErr ? this.border1 :this.border2}}/>

                                        </div>
                                        
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{paddingTop:'10px'}}>
                                        <div>
                                        <span>Enter Email Address</span>
                                        <input type='text' name='email' onChange={this.email} style={{height:'25px',width:'240px',marginTop:'7px',border: this.state.emailErr ? this.border1 :this.border2}}/>

                                        </div>
                                        
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{paddingTop:'10px'}}>
                                        <div>
                                        <span>Enter Password</span>
                                        <input type='password' name='pass' onChange={this.pass} style={{height:'25px',width:'240px',marginTop:'7px',border: this.state.passErr ? this.border1 :this.border2}}/>

                                        </div>
                                        
                                    </td>
                                </tr>
                               
                                <tr>
                                    <td style={{paddingTop:'10px'}}>
                                        <div>
                                        <span>Confirm Password</span>
                                        <input type='password' name='pass' onChange={this.conformpas} style={{height:'25px',width:'240px',marginTop:'7px',border:'0.5',border: this.state.confpassErr ? this.border1 :this.border2}}/>
                                        </div>
                                    </td>
                                </tr>
                               

                                
                                <tr >
                                    <td style={{paddingTop:'10px'}} >
                                        <center>
                                        <button style={{marginTop:'10px',backgroundColor:'#7900FF',width:'240px',height:'30px',color:"white"}} onClick={this.verify}>Sign in !</button>
                                        </center>
                                        
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{paddingTop:'10px'}}>
                                     <div>
                                         <center>

                                    
                                         <h4>Already a user ??<a href="" style={{color:'black',width:'80px',height:'30px'}} onClick={this.login}>SignIn !</a></h4>
                                         
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
export default Signup;