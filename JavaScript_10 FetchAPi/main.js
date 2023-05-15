async function fetchText() {

let response = await fetch('fetchapi_info.txt');
    
    
    
    
console.log(response.status); // 200
    
console.log(response.statusText); // OK
    
    
    
    
    if (response.status === 200) {
    
    console.log(response);
    
    let data = await response.text();
    
    console.log(data);
    
    // handle data
    
    }
    
    }