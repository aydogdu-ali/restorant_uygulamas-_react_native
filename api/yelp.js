
import axios from "axios";


export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Fjw1-PapfH9tOOmZ0duAea7yzuqyOPifl1qAgJ0s0_JUanlwMGC05U8Np0iYdG25-eRH4EdRKCVAGAl3SzEiNy2OtRsIRhi6WfAkYSY1bjaYaT38eJLTDHVb89CLZnYx",
  },
});
