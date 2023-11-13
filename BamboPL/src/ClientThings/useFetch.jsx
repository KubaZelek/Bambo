import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortCont = new AbortController();
  
      // Simulate a delay by using setTimeout
      setTimeout(() => {
        setIsPending(false);
        // You can set some mock data if needed
        setData({ exampleData: 'Hello, this is mock data!' });
        setError(null);
      }, 1000);
  
      return () => abortCont.abort();
    }, [url]);
  
    return { data, isPending, error };
  };
  
  export default useFetch;