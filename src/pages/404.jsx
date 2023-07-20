import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import not_found from "../assets/animation/not_found.json";

function Page404(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <Lottie animationData={not_found} />
      </div>
      <div className="center">
        <p>the page thou dost seek evades thy clutch</p>
        <Link to="/" className="mt-50 mob-menu-button action-btn">
          <span>Back to homepage </span>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
