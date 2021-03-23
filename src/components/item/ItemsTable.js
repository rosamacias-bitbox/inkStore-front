import React from 'react';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { useFetchItem } from '../../hooks/useFetchItem';
import { ItemsModal } from './ItemsModal';
import { uiOpenModal, uiCloseModal } from '../../actions/ui';
import { eventSetItemActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

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

  const dispatch = useDispatch();

  const handleAdd = () => {    
    dispatch( uiOpenModal() );
  };

  const handleRemove = () => {
    dispatch( uiCloseModal() );
  };

  const handleOnRowClick = (e) => {
    handleAdd();
    dispatch( eventSetItemActive( e));
  }

  return (
    <div>
      <div style={{ height: 600, width: '100%', padding: 100}}>
        <DataGrid 
          rows={items} 
          columns={columns} 
          onRowClick={handleOnRowClick}
          />
        <Button onClick={handleRemove}>Remove</Button>
        <Button onClick={handleAdd}>Add</Button>        
      </div>
     
      <ItemsModal/>
      <AddNewFab/>
     
    </div>
  );
}

export default ItemsTable;
