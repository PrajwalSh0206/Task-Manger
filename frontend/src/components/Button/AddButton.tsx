import './AddButton.scss'

const AddButton = () => {
    return (
        <button className="addbutton">
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p>Add New Task</p>
        </button>
    )
}

export default AddButton