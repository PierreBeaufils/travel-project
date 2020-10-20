import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = {};

// Container
const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// == Export
export default NavbarContainer;
