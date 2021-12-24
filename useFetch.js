import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState();
  //load the blog data 
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resources");
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          //check if the blog is loaded or not
          setisPending(false);
          seterror(null);
        })
        //displays "failed to fetch " message if it is not able to fetch the data
        .catch(err => {
          if (err.name === "Aborterror") {
            console.log("fetch aborted")
          }
          else {
            setisPending(false);
            seterror(err.message);
          }
        })
    }, 10);

    return () => abortCont.abort();
  }, [url]);
  
  return { data, isPending, error }
}

export default useFetch;