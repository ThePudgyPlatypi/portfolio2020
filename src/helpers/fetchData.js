export default async function fetchData (url, stateSetter, callback) {
   try{
    const rawData = await fetch(url);
    const parseData = await rawData.json();
    
    stateSetter(parseData);

    if(callback) {
        callback(parseData);
    }
   } catch (e) {
       console.log(`There was an error: ${e.message}`)
   }
}