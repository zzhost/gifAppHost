import { useState, useEffect } from "react";
import giphy from "../apis/giphy";

const useGifs = (defaultSearchTerm) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const response = await giphy.get("/search", {
        params: {
          q: term,
        },
      });

      setGifs(response.data.data);
    } catch (err) {
      console.error("Error response");
      console.log(err);
    }
  };

  return [gifs, search];
};

export default useGifs;
