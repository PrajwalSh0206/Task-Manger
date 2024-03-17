import React from 'react'
import './AddButton.scss'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { changeState } from '../../store/reducers/popupReducer';

const AddButton:React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const callPopup=()=>{
        dispatch(changeState());
    }
    
    return (
        <button className="addbutton" onClick={callPopup}>
            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p>Add New Task</p>
        </button>
    )
}

export default AddButton
