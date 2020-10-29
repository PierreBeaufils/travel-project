import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TravelDashboard from 'src/components/TravelDashboard';

const mapStateToProps = (state, ownProps) => ({
  travel: state.travels.currentTravel,
  id: ownProps.match.params.id,
});

const mapDispatchToProps = {};

// Container
const TravelDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelDashboard);

// == Export
export default withRouter(TravelDashboardContainer);
