export default function Banner2() {
    return (
      <div className="App">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              backgroundColor: "",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <center>
              <b style={{ fontSize: "32px", color: "blueviolet" }}>
                One stop point for your investment
              </b>
              <p style={{ fontSize: "24px", color: "grey" }}>
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
                get started 
              </button>
            </center>
          </div>
          <div
            style={{
              paddingTop: "30px"
            }}
          >
            <center>
              <img
                src="https://geeksvidya.ga/StartInvest/assets/img/hero-img.png"
                width="300px"
              />
            </center>
          </div>
        </div>
      </div>
    );
  }
  