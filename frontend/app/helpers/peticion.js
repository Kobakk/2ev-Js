export function peticion(arg){
    const  {cb, url} = arg;
    fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((response) => {
        console.log(response["data"])
        for(let value in response["data"]){
            console.log(response["data"][value])
        }
    })
    .then((res)=>cb(res))
    .catch(err => console.log(err))
    .finally()
    
}