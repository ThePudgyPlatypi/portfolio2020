export default async function fetchData (url, stateSetter) {
    const rawData = await fetch(url);
    const parseData = await rawData.json();
    stateSetter(parseData);
}