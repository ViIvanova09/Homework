document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    // Define your favorite artists and songs
    const artists = [
        {
            name: "Artist 1",
            image: "zhu.jpeg",
            lyricsFile: "zhu.txt",
        },
        {
            name: "Artist 2",
            image: "january.jpeg",
            lyricsFile: "january.txt",
        },
        {
            name: "Artist 3",
            image: "ledZeppelin.jpeg",
            lyricsFile: "ledZeppelin.txt", 
        }
    ];

    // Create artist cards
    artists.forEach((artist) => {
        const card = document.createElement("div");
        card.className = "artist-card";

        const image = document.createElement("img");
        image.className = "artist-image";
        image.src = artist.image;
        image.alt = artist.name;

        const lyricsContainer = document.createElement("div");
        lyricsContainer.className = "lyrics-container";

        // Use XMLHttpRequest to fetch lyrics
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const lyricsText = xhr.responseText;
                lyricsContainer.textContent = lyricsText;
            }
        };
        xhr.open("GET", artist.lyricsFile, true);
        xhr.send();

        card.appendChild(image);
        card.appendChild(lyricsContainer);

        // Toggle lyrics visibility on image click
        image.addEventListener("click", function () {
            lyricsContainer.style.display = lyricsContainer.style.display === "none" ? "block" : "none";
        });

        container.appendChild(card);
    });
});
