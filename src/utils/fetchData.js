export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '53daa30df7msha6ea15233b83db2p1e46a2jsn83638d727ca3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = response.json();
    return data;
}