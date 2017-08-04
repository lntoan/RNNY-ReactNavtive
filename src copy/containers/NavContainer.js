import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push, pop } from '../actions/navigationActions';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  navigationState: state.nav
});

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Nav);
