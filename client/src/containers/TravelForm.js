import { connect } from 'react-redux';
import TravelForm from 'src/components/TravelForm';
import { submitTravelForm, changeFieldValue } from 'src/actions/travels';

const mapStateToProps = (state) => ({
  travelFields: state.travels.travelFields,
});

const mapDispatchToProps = (dispatch) => ({
  submitTravelForm: () => {
    dispatch(submitTravelForm());
  },
  changeFieldValue: (field, value) => {
    dispatch(changeFieldValue(field, value));
  },
});

const TravelFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelForm);

export default TravelFormContainer;
