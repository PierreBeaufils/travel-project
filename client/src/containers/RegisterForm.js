import { connect } from 'react-redux';
import RegisterForm from 'src/components/RegisterForm';
import { handleRegister } from 'src/actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  handleRegister: (data) => {
    dispatch(handleRegister(data));
  },
});

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);

export default RegisterFormContainer;
