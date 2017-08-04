import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/navigationActions';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  navigationState: state.nav
});

function mapDispatchToProps(dispatch){
  return Object.assign({dispatch: dispatch}, bindActionCreators({
    onModalOpen: openModal,
    onModalClose: closeModal
  }, dispatch));
}

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     onModalOpen: openModal,
//     //onModalClose: closeModal
//   }, dispatch)
// );

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
