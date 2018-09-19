const axios = require('axios');

function getImages () {
    return axios.get('/data/images.json');
}

function getSounds () {
    return axios.get('/data/sounds.json');
}

function getTexts () {
    return axios.get('/data/texts.json');
}


function cartProduct (...sets) {
    const flatten = (arr) => [].concat.apply([], arr);

    return sets.reduce((acc, set) =>
        flatten(acc.map(x => set.map(y => [ ...x, y ]))),
        [[]]);
}


function filterChanged (imagesFilter, soundsFilter, textsFilter) {
    return new Promise((resolve, reject ) => {
        axios.all([getImages(), getSounds(), getTexts()])
        .then(axios.spread((images, sounds, texts) => {

            const imgs = images.data.data.images;
            const imgsByCat = imgs.filter(e => e.category === imagesFilter)

            const snds =  sounds.data.data.sounds;
            const sndsByCat = snds.filter(e => e.category === soundsFilter)

            const txts = texts.data.data.texts;
            const txtsByCat = txts.filter(e => e.category === textsFilter)

            const prod = cartProduct(imgsByCat, sndsByCat, txtsByCat)

            resolve(prod)
        }))
        .catch(error => {
            reject(error)
        });
    });
}

module.exports = filterChanged