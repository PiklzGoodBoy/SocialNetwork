import { React, useContext } from 'react'
import { addPostCreator, updateNewPostCreator } from '../../../../../../redux/profile_reducer';
import SubmitPostBox from './SubmitPostBox';
import StoreContext from '../../../../../../StoreContext';

export default function SubmitPostBoxContainer() {

    const ContextStore = useContext(StoreContext);
    
    let store = ContextStore.getState();  
    let addPost = () => {
        ContextStore.dispatch(addPostCreator())
    };

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text);
        ContextStore.dispatch(action)
    };


    return <SubmitPostBox
        addPost={addPost}
        updateNewPostText={onPostChange}
        newPostText={store.profilePage.newPostText}
    />
}