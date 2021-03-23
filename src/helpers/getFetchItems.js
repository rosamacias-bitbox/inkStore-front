export const getFetchItems = async () => {
    const url = 'http://192.168.23.218:8080/api/items/findAll';
    const response = await fetch(url);
    const items = await response.json();
    console.log(items);
    return items;
}
