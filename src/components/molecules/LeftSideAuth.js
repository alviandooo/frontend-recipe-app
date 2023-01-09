import React from "react";
import "../../styles/components/leftSideAuth.css";

function LeftSideAuth() {
  return (
    <div className=" left-side">
      {/* <!-- left side --> */}
      <div className="layer-left-side">
        <div>
          <img
            className="icon-login"
            alt="mama-recipe-icon"
            src="/images/icon-login.webp"
          />
          <p className="text-icon-login">Mama Recipe.</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSideAuth;
