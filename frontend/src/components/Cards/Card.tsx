import React from 'react';
import './Card.scss';
import { deleteTasks, getTasks } from '../../../service/task.service';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../store/reducers/taskReducer';
import { enableToast } from '../../store/reducers/snackBarReducer';

interface CardDto {
  id: string;
  title: string;
  description: string;
  date: string;
  completedTag: boolean;
}

const Card: React.FC<CardDto> = ({
  id,
  title,
  description,
  date,
  completedTag
}) => {
  const editTask = () => {};
  const deleteTask = async () => {
    try {
      await deleteTasks(id);
      await fillTask()
      openToast("success", "Task Deleted Successfully");
    } catch (error) {
      openToast("failure", "Task Failed To Delete");
    }
  };

  type toastDto = 'success' | 'failure';
  const dispatch = useDispatch<AppDispatch>();
  
  const fillTask = async () => {
    const result = await getTasks();
    dispatch(updateTask(result.data));
  };

  const openToast = (type: toastDto, message: string) => {
    dispatch(
      enableToast({
        toastMessage: message,
        toastType: type
      })
    );
  };

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <small className="date">{date}</small>
      <div className="buttons">
        <button className={`tag ${completedTag ? 'completed' : ''}`}>
          {completedTag ? 'Completed' : 'Incomplete'}
        </button>
        <div>
          <button onClick={editTask}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 10H16M8 6H12M8 14H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button onClick={deleteTask}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
