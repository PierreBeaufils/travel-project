import { connect } from 'react-redux';
import UserDashboard from 'src/components/UserDashboard/';
import { fetchUserData } from 'src/actions/user';
<<<<<<< HEAD
import { fetchTravels, fetchUserTravelsData } from 'src/actions/travels';
=======
import { fetchTravels } from 'src/actions/travels';
>>>>>>> client

const mapStateToProps = (state) => ({
  user: state.user.profile,
  travels: state.travels.travels,
<<<<<<< HEAD
  loadingDatas: state.travels.loadingDatas,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserTravelsData: () => {
    dispatch(fetchUserTravelsData());
  },
=======
  loadingTravels: state.travels.loadingTravels,
  loadingUser: state.user.loadingUser,
});

const mapDispatchToProps = (dispatch) => ({
>>>>>>> client
  fetchUserData: () => {
    dispatch(fetchUserData());
  },
  fetchTravels: () => {
    dispatch(fetchTravels());
  },
});

const UserDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDashboard);

export default UserDashboardContainer;
