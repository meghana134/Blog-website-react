import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Create = () => {
    const [title, setTitle] = useState('');
    const [body,setBody]= useState('');
    const [author,setAuthor] = useState('Moshi');
    const [isPending,setIsPending]= useState(false);
    const history = useHistory();


    const handleSubmit = (e)=>{
        //to stop reloading the page automatic on click of "add blog" button
        e.preventDefault();
        const blog = {title,body,author}

        setIsPending(true);
        

        // ADDING USER ENTERED DATA INTO THE DATA FILE
        fetch('http://localhost:800/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)

        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
            // TO REDIRECT THE USER INTO HOME PAGE AFTER SUBMITTING THE BLOG
            history.go(-1);

            //OR
            
            // TO REDIRECT THE USER INTO HOME PAGE AFTER SUBMITTING THE BLOG
            // history.push('/');
        })


       

        
    }
    
    return (
        <div className="create">
            <h2>add new content</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                    required
                    value={title}
                    //to store the dynamic value of the title
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <label> Blog body:</label>
                <textarea 
                required
                value={body}
                //to get the dynamic user entered value in body
                onChange={(e)=> setBody(e.target.value)}>
                </textarea>

                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* to get the input value filled */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
      );
}
 
export default Create;