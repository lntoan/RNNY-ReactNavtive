import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { openModal, closeModal } from '../actions/navigationActions';
import NewsFeed from '../components/NewsFeed';
import { allNewsSelector } from '../selectors/newsSelectors';
import { reshapeNewsData } from '../util/dataTransformations';
import { addBookmark } from '../actions/bookmarkActions';

const mapStateToProps = (state) => {
  return {
    news: allNewsSelector(state),
    modal: undefined
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: loadNews,
    onModalOpen: openModal,
    onModalClose: closeModal,
    addBookmark
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
