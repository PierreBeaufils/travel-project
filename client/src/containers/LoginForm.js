import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeFieldValue, handleLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    dispatch(changeFieldValue(name, value));
  },
  handleLogin: () => {
    dispatch(handleLogin());
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;
