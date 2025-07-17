// import PropTypes from "prop-types";
import Navbar from "./headers/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the location changes
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl py-10 m-auto">{children}</div>
    </>
  );
};

// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default MainLayout;
