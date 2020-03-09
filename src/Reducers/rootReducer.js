const initState = {
    posts : [
        {id: "1",title : "mytitle", body:'my body'},
        {id: "2",title : "mytitle2", body:'my body2'},
        {id: "3",title : "mytitle3", body:'my body3'},

    ]
}

const rootReducer = (state = initState,action) => 
{   
    if(action.type === 'DELETE_POST'){
        console.log("i am in",action.id)
        let newPosts = state.posts.filter(ninja => {return ninja.id !== action.id});
        console.log(newPosts)
        
                    return {
                ...state,
                posts: newPosts
            }
        
    }
    
    return state

}

export default rootReducer;