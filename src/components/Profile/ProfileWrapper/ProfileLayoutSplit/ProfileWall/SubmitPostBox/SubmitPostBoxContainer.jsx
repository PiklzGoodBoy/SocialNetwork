import { addPost,updateNewPostText } from '../../../../../../redux/profile_reducer';
import SubmitPostBox from './SubmitPostBox';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(add_post_creator())
//         },
//         updateNewPostText: (text) => {
//             dispatch(update_new_post_creator(text))
//         }
//     }
// }

const SubmitPostBoxContainer = connect(mapStateToProps, {addPost,updateNewPostText})(SubmitPostBox);

export default SubmitPostBoxContainer; 