import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/newsActions';
import { openModal, closeModal } from '../actions/navigationActions';
import { addBookmark } from '../actions/bookmarkActions';
import Search from '../components/Search';
import { searchNewsSelector } from '../selectors/newsSelectors';

const mapStateToProps = (state) => {
  return {
    filteredNews: searchNewsSelector(state),
    modal: undefined
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchNews,
    onModalOpen: openModal,
    onModalClose: closeModal,
    addBookmark
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
