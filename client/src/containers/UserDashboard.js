import { connect } from 'react-redux';
import UserDashboard from 'src/components/UserDashboard/';

const mapStateToProps = (state) => ({
  user: state.user.infos,
  travels: state.travels.travels,
});

const mapDispatchToProps = {};

const UserDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDashboard);

export default UserDashboardContainer;
