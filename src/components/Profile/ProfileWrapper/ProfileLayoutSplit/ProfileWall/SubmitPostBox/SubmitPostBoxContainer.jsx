import React from 'react'
import { addPostCreator, updateNewPostCreator } from '../../../../../../redux/profile_reducer';
import SubmitPostBox from './SubmitPostBox';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostCreator(text))
        }
    }
}
const SubmitPostBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitPostBox);

export default SubmitPostBoxContainer; 