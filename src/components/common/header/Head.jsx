import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>
              <span className="initial1">S</span>cholars-
              <span className="initial2">P</span>ro{" "}
              <span className="initial3">C</span>
              onnect <span className="initial4">L</span>LP
            </h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <a href="https://www.linkedin.com/company/scholar-pro-connect-llp/"><i className="fab fa-linkedin icon"></i></a>
             <a href="https://www.instagram.com/scholar_pro_connect/"> <i className="fab fa-instagram icon"></i></a>
            {/* <i className="fab fa-youtube icon"></i> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
