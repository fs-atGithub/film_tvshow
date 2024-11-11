import PropTypes from 'prop-types';
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

// Prop validation
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is a React node and is required
};

export default Layout;