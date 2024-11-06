const API = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;
export function get(path){
    return fetch(API+path,{
        headers: {
            Authorization: 
            `Bearer ${API_KEY}`,

            "Content-Type": "application/json; charset=utf-8",
        }
    }).then((result) => result.json());
}