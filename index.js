window.onload = function() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b721fb7cb7mshc145aec713358ffp15a997jsneacfc76db713",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
        .then((response) => response.json())
        .then(jsonData => {
            console.log(jsonData.data[0].title);
            let albumName = document.getElementsByClassName('api-class1')
            for (let i = 0; i < albumName.length; i++) {
                albumName[i].innerHTML = jsonData.data[i].title_short
            }
            let albumContent = document.getElementsByClassName('api-class')
            for (let i = 0; i < albumName.length; i++) {
                albumContent[i].innerHTML = jsonData.data[i].title
            }
        })
        .catch(err => {
            console.error(err);
        });
}