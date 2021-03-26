import { useDispatch, useSelector } from 'react-redux';
import { useFetchItems } from '../../hooks/useFetchItems';
import { ItemsModal } from './ItemsModal';
import { uiOpenModal, uiCloseModal } from '../../actions/ui';
import { itemSetActive, itemDeleted } from '../../actions/items';
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


const ItemsScreen = () => {

  const dispatch = useDispatch();
  
  useFetchItems(dispatch);
  const { items } = useSelector ( state => state.warehouse );

  const handleAdd = () => {    
    dispatch( uiOpenModal() );
  };

  const handleDelete = () => {

    dispatch( itemDeleted());
    dispatch( uiCloseModal() );
  };

  const handleOnRowClick = (e) => {  
    dispatch( itemSetActive(e.row));
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
        
        <Button onClick={handleDelete}>Delete</Button>      
        <Button onClick={handleAdd}>Add</Button>        
        
      </div>
    
      <ItemsModal/>     
    </div>
  );
}

export default ItemsScreen;
