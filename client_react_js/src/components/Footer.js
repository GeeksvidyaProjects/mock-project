export default function Footer() {
    return (
      <div
        style={{
          padding: "20px",
          color: "color",
          // backgroundImage: `url("https://image.freepik.com/free-vector/white-gray-geometric-pattern-background-vector_53876-136511.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor:""
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "10px"
            //backgroundColor: "blue"
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
              //paddingLeft: "70px"
              //backgroundColor: "yellow"
            }}
          >
            <div
              style={{
                width: "300px",
                //backgroundColor: "violet",
                display: "flex",
                justifyContent: "center"
                //alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "250px",
                  // color: "black",
                  display: "flex",
                  flexDirection: "column"
                  //justifyContent: "center",
                  //alignItems: "center"
                }}
              >
                <h2 style={{ color: "blueviolet" }}>InterFace</h2>
                <span>
                  StartInvest is an investing platform where users can find the
                  best mutual funds to invest in and can invest their money
                  without any hassles.
                </span>
              </div>
            </div>
  
            <div
              style={{
                width: "300px",
                //backgroundColor: "black",
                display: "flex",
                justifyContent: "center"
                // alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "250px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column"
                  //justifyContent: "center",
                  // alignItems: "center"
                }}
              >
                <h2 style={{ color: "blueviolet" }}>find us on</h2>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src="https://img.icons8.com/fluency/24/000000/instagram-new.png" />
                  <span style={{ marginLeft: "5px" }}>facebook</span>
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src="https://img.icons8.com/color/24/000000/telegram-app--v1.png" />
                  <span style={{ marginLeft: "5px" }}>telegram</span>
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src="https://img.icons8.com/external-justicon-flat-justicon/22/000000/external-linkedin-social-media-justicon-flat-justicon.png" />
                  <span style={{ marginLeft: "5px" }}>linkedin</span>
                </span>
              </div>
            </div>
            <div
              style={{
                width: "300px",
                // backgroundColor: "violet",
                display: "flex",
                justifyContent: "center"
                //alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "250px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column"
                  //backgroundColor: "violet",
                  //justifyContent: "center",
                  //alignItems: "center"
                }}
              >
                <h2 style={{ color: "blueviolet" }}>Menu</h2>
                <span>Home</span>
                <span>About</span>
                <span>Advantages</span>
                <span>Pricing</span>
                <span>SignUp</span>
                <span>signIn</span>
              </div>
            </div>
            <div
              style={{
                width: "300px",
                // backgroundColor: "violet",
                display: "flex",
                justifyContent: "center"
                //alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "250px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column"
                  //justifyContent: "center",
                  //alignItems: "center"
                }}
              >
                <h2 style={{ color: "blueviolet" }}>Contact</h2>
                <span>Email : interface@gmail.com</span>
                <span>Mobile : +91 98627628222</span>
                <span>Country : India</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p style={{ color: "blueviolet" }}>
            @copyrights InterFace. All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
  