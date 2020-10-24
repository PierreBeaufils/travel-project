import { connect } from 'react-redux';
import UserDashboard from 'src/components/UserDashboard/';
import { fetchUserData } from 'src/actions/user';
import { fetchTravels, setLoadingState } from 'src/actions/travels';

const mapStateToProps = (state) => ({
  user: state.user.profile,
  travels: state.travels.travels,
  loadingDatas: state.travels.loadingDatas,
});

const mapDispatchToProps = (dispatch) => ({
  setLoadingState: (loading) => {
    dispatch(setLoadingState(loading));
  },
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
