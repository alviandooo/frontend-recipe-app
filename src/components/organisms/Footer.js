import React from "react";
import "../../styles/components/footer.css";

function Footer() {
  return (
    <div>
      {/* <!-- footer --> */}
      <footer>
        <div className="footer">
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>
          <div className="footer-link">
            <p>
              &copy Copyright 2022 by M Restu Alviando. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* end-footer */}
    </div>
  );
}

export default Footer;
