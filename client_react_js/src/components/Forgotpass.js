import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Forgotpass extends React.Component{
    constructor(){
        super();
        this.state={email:'', verify:false,verifycode:"***&*^%&",code:'',pass:"",repass:""};
        
    }
    
    email=(e)=>{
        var q=e.target.value;
        this.setState({email:q}); 
    }

    verifyemail=()=>{
        console.log(this.state.email);
        var post={   
            "email_id":this.state.email, 
            };
        axios.post("http://localhost:3001/users/exists",post
        )
        .then((res) => {
            console.log("email check");
            console.log(res);
            console.log(res.data);
            if(res.data.status===400){
                
                console.log('user existed');
                this.sendOTP();
            }else{
                
                console.log('user not existed');
                alert("Please provide regiserd Email");
            }
        }) 
    }
    otp=(e)=>{
        this.setState({code:e.target.value});
    }

    verifyotp=()=>{
        if(this.state.code===this.state.verifycode){
            console.log("sucsess");
            this.setState({verify:true});
        }else{
            console.log("fail");
        }
    }

    pass=(e)=>{
        this.setState({pass:e.target.value});
    }

    repass=(e)=>{

        this.setState({repass:e.target.value});
    }

    update=()=>{
        
        if(this.state.pass!==this.state.repass){
            alert("Plese enter password peoperly----");
        }else{

            if(this.state.verify===true){

                var post={   
                    "email_id":this.state.email, 
                    "password":this.state.pass};
                axios.post("http://localhost:3001/users/updatepass",post
                )
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                })




            }else{
                    alert("Please Verify email first");
            }

            



        }
    }

    sendOTP=()=>{
        ///send data;
        const characters ='ABCDE0123456789FGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


        let result = '';
        const length = 8;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 62));
        }
        console.log(result);
        
        this.setState({verifycode:result});
        var post={   
            "email_id":this.state.email, 
            "otp":result
            };
        axios.post("http://localhost:3001/emails/verify",post
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            if(res.data==="sent"){
              console.log("sent otp");
            }else{
                alert('something happended');
            }
        })
        
        console.log(post);

    }
    

    render() {
        return (
          <div style={{width:"100vw",height:"100vh",display:'flex',justifyContent:'center',verticalAlign:'center',alignItems:'center'}}>
              <div style={{width:"60vw",height:"80vh",backgroundColor:"#7900FF",minWidth:'280px',display:'flex',justifyContent:'center',alignItems:'center'}}>

                  <div style={{backgroundColor:'white',width:"80%",height:'80%',display:'flex',justifyContent:'center',alignItems:'center',minWidth:'26 0px'}}>
                      <center> 
                    
                      <p style={{margin:"10px"}}>Enter Registerd Email:</p>
                      
                      <input type="email" onBlur={this.email} style={{height:'25px',width:'200px',border:"2px solid black" ,borderRadius:'0.5'}} />
                      <br/>
                      
                      <button  onClick={this.verifyemail} style={{marginTop:'10px',backgroundColor:'#7900FF',width:'100px',height:'30px',color:"white",marginBottom:'9px'}}>Send OTP</button>
                      
                      <p style={{margin:"10px"}}>Enter OTP :</p>
                      
                      <input onBlur={this.otp} type="password" style={{height:'25px',width:'200px',border:"2px solid black"}} />
                      <br/>
                      
                      <button onClick={this.verifyotp} style={{marginTop:'10px',backgroundColor:'#7900FF',width:'100px',height:'30px',color:"white",marginBottom:'9px'}}>Verify OTP </button>
                      
                      <p style={{margin:"10px"}}>Enter New Password:</p>
                      
                      <input onBlur={this.pass} type="password" style={{height:'25px',width:'200px',border:"2px solid black"}}/>
                      
                      
                      <p style={{margin:"10px"}}>Re-Enter New Password:</p>
                      
                      <input onBlur={this.repass} type="password" style={{height:'25px',width:'200px',border:"2px solid black"}}/>
                      <br/>
                      
                      <button onClick={this.update} style={{marginTop:'10px',backgroundColor:'#7900FF',width:'100px',height:'30px',color:"white",marginBottom:'9px'}}>Update</button>

                      </center>
                    </div>

              </div>
          </div>
        )
    }
}

export  default  withRouter(Forgotpass);