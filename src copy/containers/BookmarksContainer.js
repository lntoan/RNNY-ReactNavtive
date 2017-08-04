//import { NavigationExperimental } from 'react-native';
import * as NavigationExperimental from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openModal, closeModal } from '../actions/navigationActions';
import { loadBookmarks, addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';
import { bookmarkedNewsSelector } from '../selectors/newsSelectors';
//const { StateUtils } = NavigationExperimental;

const mapStateToProps = (state) => {
  const modal = undefined;//bookmarksState && bookmarksState.modal;
  return {
    news: bookmarkedNewsSelector(state),
    modal: modal || undefined
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: loadBookmarks,
    onModalOpen: openModal,
    onModalClose: closeModal,
    addBookmark
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
