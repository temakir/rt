let state = {
    profilePage:{
            posts: [
                {message: "Hello!", id: "1", like_counts: "15"},
                {message: "Hello! What's your name?", id: "2", like_counts: "4"},
                {message: "My name is Igor. And you?", id: "3", like_counts: "11"}]
        },
    dialogsPage: {
        messageData : [
            {message: "Hi", id: "1"},
            {message: "Yo", id: "2"},
            {message: "By", id: "3"},
            {message: "By", id: "4"},
            {message: "By", id: "5"}],
        dialogData : [
            {name: "Dmitry", id: "1"},
            {name: "Alex", id: "2"},
            {name: "Vikor", id: "3"},
            {name: "Roman", id: "4"},
            {name: "Valentina", id: "5"}
        ]
    }
}

export default state;