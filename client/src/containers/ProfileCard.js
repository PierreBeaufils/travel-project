import { connect } from 'react-redux';
import ProfileCard from 'src/components/UserDashboard/ProfileCard';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

const ProfileCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCard);

export default ProfileCardContainer;
