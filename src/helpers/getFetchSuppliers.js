
export const getFetchSuppliers = async () => {

    const url = 'http://localhost:8080/api/suppliers/findAll';
    const response = await fetch(url);
    const suppliers = await response.json();
    return suppliers;
}
