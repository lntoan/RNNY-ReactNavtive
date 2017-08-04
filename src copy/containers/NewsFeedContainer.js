import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { openModal, closeModal } from '../actions/navigationActions';
import NewsFeed from '../components/NewsFeed';
import { allNewsSelector } from '../selectors/newsSelectors';
import { reshapeNewsData } from '../util/dataTransformations';
import { addBookmark } from '../actions/bookmarkActions';

const mapStateToProps = state => ({
  news: allNewsSelector(state)  // chưa apply selector la news --> 1 pros của componet NewsFeed
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: loadNews,
    addBookmark,
    onModalOpen: openModal,
    onModalClose: closeModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
