import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNewItem, eventClearActiveEvent } from '../../actions/events';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-10%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#fff",
        width: 500,
        height: 750,
    }
};

Modal.setAppElement('#root')

export const ItemsModal = () => {

    const { modalOpen } = useSelector ( state => state.ui );
    const { activeEvent } = useSelector ( state => state.warehouse );

    const dispatch = useDispatch();

    const closeModal = () => {      
        dispatch( uiCloseModal() );
        dispatch( eventClearActiveEvent() );

        //todo - create new item -- setFormValues(initEvent)
    }

    const [formValues , setFormValues] = useState({
        name :  '',
        code :  '',
        price : '',
        state : '',
        description : ''
    });

    const {name, code, price, state, description } = formValues;

    useEffect(() => {        
        console.log( activeEvent)
        if (activeEvent){
            setFormValues(activeEvent);
        }
    }, [activeEvent]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues);
        dispatch( eventAddNewItem({
            ...formValues
        }));
    }

    return (
        <Modal
            isOpen={modalOpen}
            //onAfterOpen={afterOpenModal}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <h1> Item </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" placeholder="name" name="name" value={name} onChange={ handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Code</label>
                    <input className="form-control" placeholder="code" name="code" value={code} onChange= {handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" placeholder="price" name="price" value={price} onChange= {handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input className="form-control" placeholder="state"   name="state" value={state} onChange= {handleInputChange} />
                </div>

                <hr />
                <div className="form-group">
                    <label>Description</label>
                    
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="description"
                        value={description} onChange= { handleInputChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save</span>
                </button>

            </form>
        </Modal>

    )
}
