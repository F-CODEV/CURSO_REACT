
const apiKey = process.env.REACT_APP_GPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);

// peticion.then((resp) => {
//     resp.json().then((data) => {
//         console.log(data);
//     })
// }).catch(console.warn);

// ? Promesas en cadena
// ? No es necesario multiples catch
peticion.then((resp) => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn);