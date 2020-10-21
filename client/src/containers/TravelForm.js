import { connect } from 'react-redux';
import TravelForm from 'src/components/TravelForm';
import { submitTravelForm, editTravelForm } from 'src/actions/travels';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  submitTravelForm: (data) => {
    dispatch(submitTravelForm(data));
  },
  editTravelForm: (data) => {
    dispatch(editTravelForm(data));
  },
});

const TravelFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelForm);

export default TravelFormContainer;
