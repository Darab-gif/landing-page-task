import React, { useState } from "react";
import MobileHeader from "./MobileNav";
import Header from "./Header";

const NavBar = ({ about, features, plan }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Header
        MobileLink={setShow}
        about={about}
        features={features}
        plan={plan}
      />
      <div
        className={`${
          show ? "-right-0" : "-right-full"
        } fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500`}
      >
        <MobileHeader
          MobileLink={setShow}
          about={about}
          features={features}
          plan={plan}
        />
      </div>
    </div>
  );
};

export default NavBar;
