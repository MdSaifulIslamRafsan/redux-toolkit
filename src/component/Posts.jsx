import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./features/posts/postsSlice";


const Posts = () => {
    const {posts , isLoading , isError , error} = useSelector((state)=> state.posts);
    const dispatch  = useDispatch()
    useEffect(()=> {
        dispatch(fetchPost())
    },[dispatch])

    let content;
    if(isLoading){
        content = "loading posts..."
    }
    if(!isLoading && isError){
        content = error
    }
    if(!isLoading && !isError && posts.length === 0){
        content = "no post found"
    }
    if(!isLoading && !isError && posts.length > 0){
        content = posts
    }
    console.log(content);
    
    return (
        <div className="grid  mt-20 grid-cols-3 gap-10">
           { 
           Array.isArray(content) ?
           content?.map((post) => <div className="bg-gray-200 shadow-xl p-5" key={post?.id}>
                <h3 className="font-bold text-lg">{post?.title}</h3>
                <p>{post?.body}</p>
           </div>) : <h1 className="font-bold">{content}</h1>} 
        </div>
    );
};

export default Posts;