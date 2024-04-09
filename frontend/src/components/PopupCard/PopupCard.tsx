import React, { useEffect, useState } from 'react';
import './PopupCard.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { changeState } from '../../store/reducers/popupReducer';
import { createTask, getTasks } from '../../../service/task.service';
import { taskDto } from '../../../dto/task.dto';
import SnackBar from '../Snackbar/Snackbar';
import { updateTask } from '../../store/reducers/taskReducer';

interface PopupCardDto {
  title?: string;
  description?: string;
  date?: string;
  completedTag?: boolean;
  importantTag?: boolean;
}

type toastDto = 'success' | 'failure';

const PopupCard: React.FC<PopupCardDto> = ({
  title = '',
  description = '',
  date = '',
  completedTag = false,
  importantTag = false
}) => {
  let [cardTitle, setCardTitle] = useState(title);
  let [cardDescription, setCardDescription] = useState(description);
  let [cardDate, setCardDate] = useState(date);
  let [cardCompleteTag, setCardCompleteTag] = useState(completedTag);
  let [cardImportantTag, setCardImportantTag] = useState(importantTag);
  let [toastMessage, setToastMessage] = useState('Default Message');
  let [toastType, setToastType] = useState<toastDto>('failure');
  let [enableToast, setEnableToast] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const fillTask = async () => {
    const result = await getTasks();
    dispatch(updateTask(result.data));
  };

  const submitData = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const taskPayload: taskDto = {
        title: cardTitle,
        description: cardDescription,
        date: cardDate,
        completed: cardCompleteTag,
        important: cardImportantTag
      };
      const response = await createTask(taskPayload);
      openToast(response.type, response.message);
      const result = await getTasks();
      dispatch(updateTask(result.data));
      setTimeout(async () => {
        dispatch(changeState());
        await fillTask();
      }, 2000);
    } catch (error: any) {
      openToast(error.type, error.message);
    }
  };

  const openToast = (type: toastDto, message: string) => {
    setToastType(type);
    setToastMessage(message);
    setEnableToast(true);
  };

  useEffect(() => {
    if (enableToast) {
      setTimeout(() => {
        setEnableToast(false);
      }, 3000);
    }
  }, [enableToast]);

  return (
    <div className="popup-background">
      <SnackBar
        enableToast={enableToast}
        toastMessage={toastMessage}
        toastType={toastType}
      ></SnackBar>

      <form className="w-5/12 popup">
        <p className="header">Create a Task</p>
        <div className="title">
          <p>Title</p>
          <input
            type="text"
            placeholder="Hello World"
            value={cardTitle}
            onChange={(event) => {
              setCardTitle(event.target.value);
            }}
          />
        </div>
        <div className="description">
          <p>Description</p>
          <textarea
            placeholder="Eg: Watch a video On Next Js"
            value={cardDescription}
            onChange={(event) => {
              setCardDescription(event.target.value);
            }}
          />
        </div>
        <div className="date">
          <p>Date</p>
          <div className="datepicker">
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              onChange={(event) => {
                setCardDate(event.target.value);
              }}
            />
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
          <input
            type="checkbox"
            checked={cardCompleteTag}
            onChange={() => {
              setCardCompleteTag(!cardCompleteTag);
            }}
          />
        </div>
        <div className="flex align-items-center justify-content-between toggle">
          <p>Toggle Important</p>
          <input
            type="checkbox"
            checked={cardImportantTag}
            onChange={() => {
              setCardImportantTag(!cardImportantTag);
            }}
          />
        </div>
        <div className="flex flex-row justify-content-end">
          <button
            id="createtask"
            onClick={(e) => {
              submitData(e);
            }}
            className="flex flex-row align-items-center"
          >
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
