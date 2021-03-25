import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchItem } from '../../hooks/useFetchItem';
import { useFetchSuppliers} from '../../hooks/useFetchSuppliers';
import { ItemsModal } from './ItemsModal';
import { uiOpenModal, uiCloseModal } from '../../actions/ui';
import { itemSetActive, itemsSet } from '../../actions/items';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

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

  const {data, itemsLoading} = useFetchItem();
  const {data:suppliers, suppliersLoading} = useFetchSuppliers();


  const dispatch = useDispatch();

  const {payload:items} =  dispatch( itemsSet(data));

  //console.log(data);
  console.log(items);

  const handleAdd = () => {    
    dispatch( uiOpenModal() );
  };

  const handleRemove = () => {
    dispatch( uiCloseModal() );
  };

  const handleOnRowClick = (e) => {  
    //console.log(e.row);    
  }

  const handleOnRowDoubleClick = (e) => {  
    dispatch( itemSetActive(e.row));
    dispatch( uiOpenModal() );
  }

  return (
    <div>
      <div style={{ height: 600, width: '100%', padding: 100}}>
        <DataGrid 
          rows={items} 
          columns={columns} 
          onRowClick={handleOnRowClick}
          onRowDoubleClick={handleOnRowDoubleClick}
          />
        <Button onClick={handleRemove}>Remove</Button>
        <Button onClick={handleAdd}>Add</Button>        
      </div>
     
      <ItemsModal/>     
    </div>
  );
}

export default ItemsTable;
