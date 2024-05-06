import * as params from '@params';
import axios from 'axios';

const url = 'https://graph.instagram.com/me/media?fields=caption,media_url,permalink&limit=12&access_token='
const grid = document.querySelector('.instagrid');

async function fetch() {
    return axios.get(url + params.token);
}

async function init() {
    let data;

    if(alreadyFetched()) {
        data = JSON.parse(sessionStorage.getItem('ig'));
    } else {
        data = await fetch()
        data.status === 200 && sessionStorage.setItem("ig", JSON.stringify(data))
    }

    if(data.status === 200) {

        data.data.data.forEach(element => {
            let gridElement = addGrid(element)
            grid.appendChild(gridElement)
        });

    }
}

function addGrid(element) {
    let div = document.createElement('div');
    let link = document.createElement('a');
    let image = document.createElement('img')

    link.href = element.permalink
    link.alt = element.caption
    link.target = "_blank"
    image.src = element.media_url
    image.alt = element.caption
    image.width = 600
    image.height = 600
    image.loading = "lazy"
    image.style.aspectRatio = '1/1'
    image.style.objectFit = 'cover'
    link.appendChild(image)
    div.appendChild(link)
    
    return div
}

function alreadyFetched() {
    return sessionStorage.getItem('ig') !== null;
}

init()