import { useEffect , useState  } from "react";
const useFetch = (url)=>{

    const [data,setdata]  = useState(null);    
    const [isPending, setisPending] = useState(true)
    const [error,setError] = useState(null);   
   
    useEffect(() => {
        const abortcont = new AbortController();
    
        fetch(url,{ signal: abortcont.signal })
        .then(res =>{
            if(!res.ok){
                setError(true)
                throw Error('could not fetch the data for that resource');
            }
          return  res.json()
        })
        .then(data=>{
            setdata(data);
            setisPending(false);
            setError(null)
        })
        .catch(err =>{
                setisPending(false)
                setError(err.message)
        })
        return () => abortcont.abort();
    },[url]);

    return { data , isPending , error }
    
}

export default useFetch;