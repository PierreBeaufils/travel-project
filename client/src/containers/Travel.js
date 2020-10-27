import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Travel from 'src/components/Travel';
import { fetchOneTravel } from 'src/actions/travels';

const mapStateToProps = (state, ownProps) => ({
  travel: state.travels.currentTravel,
  travelLoaded: state.travels.loadingTravels,
  id: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneTravel: (id) => {
    dispatch(fetchOneTravel(id));
  },
});

// Container
const TravelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Travel);

// == Export
export default withRouter(TravelContainer);
