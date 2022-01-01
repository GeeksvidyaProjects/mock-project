import Nav from "./Navbar";
 import Nav2 from "./Nav2";
import React from "react";
import kk from '../assets/Interview-cuate (1).png';
import Card from './Cards';
class Home extends React.Component{

    selectnav=()=>{
      if(window.innerWidth>=598){
          return(<Nav />);
      }else{
        return(<Nav2 />);
      }
    }
    componentDidMount(){
        this.selectnav();
    }
    render() {
        return (
        <>
        
        {this.selectnav()}
        
        <div style={{display:"flex",flexDirection:"row",width:"100vw",flexWrap:"wrap"}}>
            <div style={{display:"flex",flexDirection:"row-reverse",width:"50%",minWidth:'400px'}}>
            <div style={{width:"35vw"}}><img src={kk} alt="Image" style={{width:"35vw",maxHeight:"450px"}}/>
            </div>
            </div>
            <div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",minWidth:'400px',alignContent:"flex-end"}}>
                <div style={{width:"100%",wordWrap:'break-word'}}>  
                <h2>we are here to avoid your fear</h2>
                <h2>we are here to avoid your fear</h2>
                <p>ajrebgfqerfho9q3ujf;o39u340r8349rtuj3498u4rriuh4r7rr</p>
                <p>rusrbgwerygh78qht3I;RJFO4I9JFFNIUFHN34IR7H44UDeuirhruuaerurfhruf</p>
                <button style={{backgroundColor:"blue",borderRadius:"10px",paddingLeft:"5px",paddingRight:"5px",color:"white",paddingTop:"4px",paddingBottom:"4px"}}>get started</button>
                </div>
            </div>
            
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",marginTop:'20px'}}>
        <Card title="Hi this is" body="body"/>
        <Card title="Hi this is" body="body"/>
        <Card title="Hi this is" body="body"/>
        </div>
        </>);
    }
}

export default Home;