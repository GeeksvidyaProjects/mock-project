import Homeimg from "../assets/homepic.png";


export default function Banner() {
    return (
      <div
        className="App"
        style={{
          //backgroundImage: `url("https://image.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg")`,
          //backgroundRepeat: "no-repeat",
         // backgroundSize: "cover",
         // backgroundColor:"#166974",
          height:"95vh",
         // border:"2px solid black",
          display:"flex",
          justifyContent:"center"
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <div
            style={{
              backgroundColor: "",
              width: "40%",
  
              display: "flex",
              flexDirection: "column",
             justifyContent: "center",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <b style={{ fontSize: "50px", color: "blueviolet" }}>
              One stop point for your investment
            </b>
            <p style={{ fontSize: "30px", color: "grey" }}>
              We are team of marketing and provide platform for investment in
              stocks
            </p>
            <button
              style={{
                width: "150px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "blueviolet",
                color: "white"
              }}
            >
              Get Started
            </button>
          </div>
          <div
            style={{
              backgroundColor: "",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <img
              src={Homeimg}
              width="496px"
            />
          </div>
        </div>
      </div>
    );
  }
  