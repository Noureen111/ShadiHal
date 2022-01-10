import React from "react";
import "../App.css";
import package1 from "../images/package1.jpg";
import package2 from "../images/package2.jpg";
import package3 from "../images/package3.jpg";

function Packages() {

  return (

    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="b">
            <div className="img1">
              <div className="img_des">
                <h1>50% <span className="h">discount</span> </h1>
              </div>
              <img src={package1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <div className="a">
                <div className="img2">
                  <div className="img_des">
                    <h1>Modern <span className="h">Venues</span> </h1>
                  </div>
                  <img src={package2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="a">
                <div className="img3">
                  <div className="img_des">
                    <h1>Customer <span className="h">priority</span> </h1>
                  </div>
                  <img src={package3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    // return(
    //     <div className="container packageMain">
    //     <div className="row">
    //       <div className="col-6">
    //         <div className="b">
    //           <div className="img1">
    //             <img src={package1} alt="" />
    //             {/* <p className="img__description">Hello there</p> */}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <div className="row">
    //           <div className="col-12">
    //             <div className="a">
    //               <div className="img2">
    //                 <img src={package2} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-12">
    //             <div className="a">
    //               <div className="img3">
    //                 <img src={package3} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  
    // );
}

export default Packages;