// veri çekmek için kullanacağız.

import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMesage, setErrorMesage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "İstanbul",
        },
      });
      setResults(response.data.businesses);
      setErrorMesage("");
    } catch (error) {
      setErrorMesage("Bağlantı Hatası");
    }
  };

  useEffect(() => {
    searchApi("Toast");
  }, []);

  return [searchApi, results, errorMesage];
};
