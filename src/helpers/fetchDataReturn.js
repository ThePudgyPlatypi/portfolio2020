export default async function fetchDataReturn (url) {
    const i = await fetch(url);
    const infoData = await i.json();
    return infoData;
}