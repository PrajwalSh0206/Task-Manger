import React from 'react';
import './PopupCard.scss';

interface PopupCardDto {
  title?: string;
  description?: string;
  date?: string;
  completedTag?: boolean;
}

const PopupCard: React.FC<PopupCardDto> = ({
  title,
  description,
  date,
  completedTag,
}) => {


  return (
    <div className="popup-background">
      <form className="w-5/12 popup">
        <p className="header">Create a Task</p>
        <div className="title">
          <p>Title</p>
          <input type="text" placeholder="Hello World" />
        </div>
        <div className="description">
          <p>Description</p>
          <textarea placeholder="Eg: Watch a video On Next Js" />
        </div>
        <div className="date">
          <p>Date</p>
          <div className="datepicker">
            <input type="text" placeholder="Select a Date" />
            <svg
              className="svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>
        <div className="flex align-items-center justify-content-between toggle">
          <p>Toggle Completed</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="flex align-items-center justify-content-between toggle">
          <p>Toggle Important</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="flex flex-row justify-content-end">
          <button id="createtask" className="flex flex-row align-items-center">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M6 12H12M18 12H12M12 12V6M12 12V18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Create Task</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupCard;
