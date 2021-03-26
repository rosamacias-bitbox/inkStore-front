
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchSuppliers } from '../../hooks/useFetchSuppliers';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';


const columns = [

    { field: 'name',    headerName: 'NAME', width: 120 },
    { field: 'country', headerName: 'COUNTRY', width: 140 }
]

const SuppliersScreen = () => {

    const dispatch = useDispatch();

    useFetchSuppliers(dispatch);
    const { suppliers } = useSelector ( state => state.warehouse );

    const handleAdd = () => {    
       
      };
    
      const handleDelete = () => {
    
       
      };
    
      const handleOnRowClick = (e) => {  
       
      }
    
      const handleOnRowDoubleClick = (e) => {  
       
      }

    return (
        <div>
            <div style={{ height: 600, width: '100%', padding: 100 }}>
                <DataGrid
                    rows={suppliers}
                    columns={columns}
                    onRowClick={handleOnRowClick}
                    onRowDoubleClick={handleOnRowDoubleClick}
                />

                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={handleAdd}>Add</Button>

            </div>

            
        </div>
    );
}

export default SuppliersScreen;