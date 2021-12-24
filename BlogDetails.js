import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id}= useParams();
    const {data : blog,error, ispending}= useFetch('http://localhost:800/blogs/' +id);

    
const history = useHistory();
//used to return it to home page

   const handleClick = ()=>{
       fetch(' http://localhost:800/blogs/' +blog.id,{
           method:"DELETE"
       }).then(()=>{
           //to return it to home page
           history.push('/');

       })
   }


    return ( 
        <div className="blog-details">
            {ispending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;

//USEPARAMS() - used to get the id of the url 
// ex=> "http://localhost:3000/blogs/9899"

//OUTPUT => Blog Deatils- 9899