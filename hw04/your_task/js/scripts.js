const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

var i;

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    const elem = document.querySelector('#tracks');
    elem.innerHTML = "";
    //fetch this url and now we are doing something with it
    fetch(baseURL + '?type=track&q=' + term) 
    //turning it into json (a data file)
    .then(response => response.json())
    .then((data) => {
        if (data.length > 0) {
            for (i = 0; i > 5; i++){
                const firstTrack = data[i];
                elem.innerHTML += getTracksHTML(firstTrack);
            // do something w/ the first Track
        }}
        else {
            //display "No tracks found that match your sear
            //criteria"
        }

    });
};

const getTracksHTML = (data) => {
    return i`<section class="track-item preview" data-preview-track="${data[i]}">
        <img src="${data.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h3>${data.name}</h3>
            <p>
                ${data.artist.name}
            </p>
        </div>
    </section>`
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    const elem = document.querySelector('#artist');
    elem.innerHTML = "";

    //fetch this url and now we are doing something with it
    fetch(baseURL + '?type=artist&q=' + term) 
    //turning it into json (a data file)
    .then(response => response.json())
    .then((data) => {
        if (data.length > 0) {
            const firstArtist = data[0];
            elem.innerHTML += getArtistHTML(firstArtist);
            // do something w/ the first artist
        }

    });
};

const getArtistHTML = (data) => {
    if (!data.image_url) {
        data.image_url = "https://i.pinimg.com/originals/0f/4a/d9/0f4ad9be306be8f5bc1e48f094552bf3.jpg";
    }
    return  `<section class="artist-card" id="${data.id}">
                <div>
                    <img src="${data.image_url}">
                    <h3>${data.name}</h3>
                    <div class="footer">
                        <a href="${data.spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>
            </section>`
 };


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};