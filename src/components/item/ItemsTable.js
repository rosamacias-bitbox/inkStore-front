import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { useFetchItem } from '../../hooks/useFetchItem';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'NAME', width: 120 },
  { field: 'code', headerName: 'CODE', width: 100 },
  { field: 'price', headerName: 'PRICE', width: 100 },
  { field: 'state', headerName: 'STATE', width: 120 },
  { field: 'description', headerName: 'DESCRIPTION', flex: 1 },
  { field: 'creationDate', headerName: 'DATE', width: 130 },
  { field: 'user', headerName: 'USER', width: 130 },
];


const ItemsTable = () => {

  const {data:items, loading} = useFetchItem();
  console.log(items);
  console.log(loading);


  const handleAdd = () => {
    // setItems(items => [...items, { id: 3, name: 'Rupert', code: '365',   price: 35 }])
  };

  const handleRemove = () => {
      //;
  };

  return (
    <div>
      <h1>[ink] Items</h1>
      <div style={{ height: 600, width: '100%', padding: '10px' }}>
        <DataGrid rows={items} columns={columns} />
        <Button onClick={handleRemove}>Remove</Button>
        <Button onClick={handleAdd}>Add</Button>
        {loading && <p>loading</p> }
      </div>
    </div>
  );
}

export default ItemsTable;
