import Nav from "./Navbar";
 import Nav2 from "./Nav2";
import React from "react";
import kk from '../assets/Interview-cuate (1).png';
import Card from './Cards';
import Footer from './Footer';
class Home extends React.Component{

    selectnav=()=>{
      if(window.innerWidth>=598){
          return(<Nav />);
      }else{
        return(<Nav2 />);
      }
    }
    
    
    render() {
        return (
        < >
        
        {this.selectnav()}
        
        
        <div style={{display:"flex",flexDirection:"row",width:"100vw",flexWrap:"wrap"}}>
            <div style={{display:"flex",flexDirection:"row-reverse",width:"50%",minWidth:'400px'}}>
            <div style={{width:"35vw"}}><img src={kk} alt="Image" style={{width:"35vw",maxHeight:"450px"}}/>
            </div>
            </div>
            <div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",minWidth:'400px',alignContent:"flex-end"}}>
                <div style={{width:"100%",wordWrap:'break-word'}}>  
                <h2>Welocome to the "InterFace"</h2>
                <h4><b>Lets face the interview with out fear.</b></h4>


                <p>Lets know the --minums-- and make them ++plus++ in the carrer opportunites.....</p>
                <button style={{backgroundColor:"blue",borderRadius:"10px",paddingLeft:"5px",paddingRight:"5px",color:"white",paddingTop:"4px",paddingBottom:"4px"}}>get started</button>
                </div>
            </div>
            
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",marginTop:'20px',flexWrap:"wrap"}}>
        <Card title="Hi this is" body="body"/>
        <Card title="Hi this is" body="body"/>
        <Card title="Hi this is" body="body"/>
        </div>
        <Footer />
        </>);
    }
}

export default Home;