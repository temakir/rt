const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialiseStore = {
    posts: [
        {message: "Hello!", id: "1", like_counts: "15"},
        {message: "Hello! What's your name?", id: "2", like_counts: "4"},
        {message: "My name is Igor. And you?", id: "3", like_counts: "11"}],
    newPostText: 'it-kamasutra.com'
}

const profilePageReducer = (state = initialiseStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                id: 5,
                like_counts: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default :
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPageChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profilePageReducer;