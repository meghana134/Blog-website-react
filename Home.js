import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:800/blogs');

  // {data: blogs} means the data is called as blogs , it passes the same data values in the blogs or also called as alias names
  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;

// COMMAND TO RUN THE JSON FILE
// npx json-server --watch data/db.json --port 8000