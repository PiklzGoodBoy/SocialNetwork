import React from 'react'
import { addPostCreator, updateNewPostCreator } from '../../../../../../redux/profile_reducer';
import SubmitPostBox from './SubmitPostBox';

export default function SubmitPostBoxContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    };

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text);
        props.store.dispatch(action)

    };

    return (
        <div>
            <SubmitPostBox
                addPost={addPost}
                updateNewPostText={onPostChange}
                newPostText={state.profilePage.newPostText}
            />
        </div>
    )
}