import { useState, useEffect } from "react";
import MakeRequest from "../MakeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await MakeRequest.get(url);
        if (res.data && res.data.data) {
          setData(res.data.data);
        }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
