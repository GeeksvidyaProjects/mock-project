 //import Nav2 from "./Nav2";
import React from "react";
import '../Styles/card.css';
class Card extends React.Component{

constructor(props){
    super(props);
}
    render() {
        return (
        <>
        
        <div style={{display:"flex",flexDirection:"column",width:"250px",paddingBlock:"20px"}} className="card">
            <div><img src="https://cdn-icons-png.flaticon.com/512/6513/6513991.png" style={{width:"30px"}} alt="icon"/></div>
            <div style={{width:"100%",display:'block',wordWrap:"break-word"}}>
                <h5>{this.props.title}</h5>
            <p>uahr4uh4uiq4thoq34th4oiq4tiqotj</p></div>
            <div><a href="# ">read more</a></div>
        </div>
        </>);
    }
}



export default Card;