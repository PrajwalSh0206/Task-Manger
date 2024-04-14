import React, { useEffect } from 'react';
import './SnackBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { disableToast } from '../../store/reducers/snackBarReducer';

const SnackBar: React.FC = () => {
  const enableToast = useSelector(
    (state: RootState) => state.snackbar.enableToast
  );
  const toastMessage = useSelector(
    (state: RootState) => state.snackbar.toastMessage
  );
  const toastType = useSelector((state: RootState) => state.snackbar.toastType);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (enableToast) {
      setTimeout(() => {
        dispatch(disableToast());
      }, 3000);
    }
  }, [enableToast]);

  return (
    <div id="snackbar" className={`${enableToast ? 'show' : ''}`}>
      <div className={toastType}>
        {toastType == 'failure' ? (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            strokeWidth="1.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12.5675 17.5008C12.8446 17.1929 12.8196 16.7187 12.5117 16.4416C12.2038 16.1645 11.7296 16.1894 11.4525 16.4973L11.4425 16.5084C11.1654 16.8163 11.1904 17.2905 11.4983 17.5676C11.8062 17.8447 12.2804 17.8197 12.5575 17.5119L12.5675 17.5008Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            strokeWidth="1.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
              fill="currentColor"
            ></path>
          </svg>
        )}
      </div>
      <p>{toastMessage}</p>
    </div>
  );
};

export default SnackBar;
