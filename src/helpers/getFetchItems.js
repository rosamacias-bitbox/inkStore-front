export const getFetchItems = async () => {
    const url = 'http://localhost:8080/api/items/findAll';
    const response = await fetch(url);
    const items = await response.json();
    return items;
}
