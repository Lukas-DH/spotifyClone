const newCard = (album,artist) => {
    return`
    <div class="col-md-2">
    <div class="card text-truncate" >
        <img class="card-img-top" src="${album.img.url}" alt="${album.name}">
            <div class="card-body">
            <a href="${album.img.url}" class=""><p class="card-subtitle mb-2 text-muted">${album.name}</p></a>
            <a href="${artist.href}" class=""><p class="card-subtitle mb-2 text-muted">${artist.name}</p></a>

            </div>
        </div>
    </div>`
}

const fetchNewReleases = () => {
    spotifyApi.browsNewReleases()
    .then((data) => {
        console.log('data', data)
        // {album: {}}]
        const albums = data?.albums?.items
            .map((item) => {
            const img = item.images.filter(
                (image)=> image.height === 300 && image.width===300)[0]
             const album = {
                 name: item.name,
                 href: item.external_urls.spotify,
                 img: img,
             }

             const artist = {
                 name: item.artists[0].name,
                 href: item.artists[0].external_urls,
             }
             return newCard(album,artist)
        }).join(" ")
        console.log("albuxxxxmns", albums)
        const tartgetDiv = document.querySelector('.row.app')
        console.log("targetDiv", tartgetDiv)
        tartgetDiv.innerHTML += albums
    })
    // 
    .catch(e => {
        console.log(e)
    })
}




window.onload = () => {
    fetchNewReleases()
}