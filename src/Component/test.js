const albums = [
  { src: "heg", name: "nfrjnfer" },
  { src: "hrg", name: "nfrjnrgregeergrefer" },
];


//herover er kilden. herunder renderer vi i en const, som react læser som et array.Vi forestiller os, at det sker i et fetch

const slides = albums.map(function(album) {

    return <img src={album.src} alt="" />
})
