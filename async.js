console.log("Code starts here")

let ans = 0;
for(let i=0;i<10;i++){
    ans += i;
}

console.log(ans)

function dummy(){
    console.log("I'm a dummy function")
}

setTimeout(dummy,2000)
console.log("I'm at the last line of the code")


// axios

// axios.get(url,data,config)
// axios.post(url,data,config)
// axios.delete(url,config)

const URL = "https://localhost:8080/api/cart"
axios.delete(URL,{
    data : {name:Himanshu},
    withCredentials : True
})

//In config we can provide an object


// Axios vs Fetch

/** 
| Feature                             | **Fetch (built-in)**                                              | **Axios (3rd-party library)**                                  |
| ----------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| **Availability**                    | Native JS API (built into browsers, Node 18+)                     | External library (install with `npm i axios`)                  |
| **Data Parsing**                    | You must manually convert response to JSON using `.json()`        | Automatically converts JSON data                               |
| **Error Handling**                  | Only rejects on *network errors*, not HTTP errors (e.g. 404, 500) | Rejects for both *network* and *HTTP errors*                   |
| **Request Timeout**                 | No built-in timeout support                                       | Has built-in timeout configuration                             |
| **Request & Response Interceptors** | ❌ Not available                                                   | ✅ Easy to add interceptors for auth/logging                    |
| **Upload/Download Progress**        | Harder to track manually                                          | Built-in support (`onUploadProgress`, etc.)                    |
| **Older Browser Support**           | Needs polyfill for IE                                             | Works in older browsers                                        |
| **Default Headers**                 | Only `Content-Type` for some requests                             | Automatically sets headers like `Accept: application/json`     |
| **Request Cancelation**             | Supported via `AbortController` (manual)                          | Simpler with `CancelToken` (now also supports AbortController) |
| **JSON Handling**                   | Manual: `res.json()`                                              | Automatic                                                      |
| **File Uploads**                    | Manual setup via `FormData`                                       | Built-in handling with simpler syntax                          |
| **Node.js Support**                 | Built-in in Node 18+, else needs `node-fetch`                     | Full Node support always                                       |

*/