import React from 'react'
import './PopupCard.scss'


interface PopupCardDto {
    title?: string, description?: string, date?: string, completedTag?: boolean
}

const PopupCard: React.FC<PopupCardDto> = ({ title, description, date, completedTag }) => {

    return (
        <div className='popup-background'>
            <div className="w-5/12 popup">
                <p className='header'>Create a Task</p>
                <div className='title'>
                    <p>Title</p>
                    <input type="text" placeholder='Hello World' />
                </div>
                <div className='description'>
                    <p>Description</p>
                    <textarea placeholder='Eg: Watch a video On Next Js' />
                </div>
                <div className='date'>
                    <p>Date</p>
                    <input type="text" placeholder='mm/dd/yyyy' />
                </div>
                <div className='flex flex-row p-5 justify-content-end'>
                    <button id='createtask' className='flex flex-row align-items-center'>
                        <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p>
                            Create Task
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopupCard
