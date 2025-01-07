// * ASYNC / AWAIT

const getImage = async () => {
    const apiKey = process.env.REACT_APP_GPHY_API_KEY;

    const urlBase = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    try {
        const resp = await fetch(urlBase);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }

}

getImage();
