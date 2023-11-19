import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Mohamed')
    const [isPending,setIspending] = useState(false)
    const hist = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title , body , author };

        setIspending(true);
        
        fetch('http://localhost:8000/blogs', {
            method : "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{ 
            console.log("New blog added")
            setIspending(false)
            hist.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={ author } 
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Mohamed">Mohamed</option>
                    <option value="Haifa">Haifa</option>
                    <option value="Mariem">Mariem</option>
                    
                </select>
               { !isPending && <button>Add Blog</button>}
               {isPending && <button>Adding a Blog...</button>}
            </form>
        </div>
      );
}
 
export default Create;