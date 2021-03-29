import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { itemClearActive, itemStartAddNew, itemStartUpdate } from '../../actions/items';
import { StatusCombo } from './StatusCombo';
import Moment from 'react-moment';


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
        height: 900,
    }
};

Modal.setAppElement('#root')

export const ItemsModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const { activeItem } = useSelector(state => state.warehouse);
    const { name:loggedUser } =  useSelector(state => state.auth);

    const dispatch = useDispatch();

    const generateNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
      }

    const generatedCode = generateNumber(0, 9999999);  
      
    const initItem = {
        id: '',
        name: '',
        code: generatedCode,
        price: '',
        state: 'AVAILABLE',
        description: '',
        creationDate: '',
        user: loggedUser
    }
    

    const [formValues, setFormValues] = useState(initItem);

    const { id, name, code, price, state, description, creationDate, user } = formValues;

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(itemClearActive());
        setFormValues(initItem);
        console.log(initItem);
    }

    useEffect(() => {
        if (activeItem) {
            setFormValues(activeItem);
        }
    }, [activeItem]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (activeItem) {
            dispatch(itemStartUpdate(formValues));
        }
        else {

            dispatch(itemStartAddNew(formValues));
        }
        closeModal();
    }


    return (
        <Modal
            isOpen={modalOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <h1> Item </h1>
            <hr />

            <form className="container" onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label>Id</label>
                    <input readOnly={true} className="form-control" placeholder="" name="id" value={id} />
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" placeholder="name" name="name" value={name} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Code</label>
                    <input className="form-control" placeholder="code" name="code" value={code} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" placeholder="price" name="price" value={price} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input className="form-control" placeholder="state" name="state" value={state} onChange={handleInputChange} />
                </div>

                <hr />
                <div className="form-group">
                    <label>Description</label>

                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="3"
                        name="description"
                        value={description} onChange={handleInputChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input readOnly={true} className="form-control" placeholder="" name="creationDate" value= {creationDate} />
                    <label>Creator</label>
                    <input readOnly={true} className="form-control" placeholder="" name="user" value={user} />
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
