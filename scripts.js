fetch('https://www.starbucks.com/menu/at-home-coffee/whole-bean')
    .then(response => {

        return response.text()
        
    })
    .then(html => {
        const parser = new DOMParser();

        const doc = parser.parseFromString(html, "text/html");
        
         const h1 = doc.querySelector('h1')
         console.log(h1.innerHTML);
    })
    .catch(err => {  
        console.log('Failed to fetch page: ', err);  
    });