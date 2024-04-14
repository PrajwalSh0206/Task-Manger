// userService.ts
import axios from 'axios';
import { STATUS_CODE } from '../constants/statusCode';
import { getTaskDto, taskDto } from '../dto/task.dto';
import {
  axiosCreateResponseDto,
  axiosDeleteResponseDto,
  axiosDto,
  axiosGetResponseDto,
} from '../dto/axios.dto';
const API_BASE_URL = 'http://localhost:5000';

type type = 'sucess' | 'failure';

class CustomError extends Error {
  type: type;
  constructor(message: string, type: type) {
    super(message);
    this.type = type;
  }
}

export const createTask = async (
  taskPayload: taskDto,
): Promise<axiosCreateResponseDto> => {
  try {
    const response: axiosDto = await axios({
      url: `${API_BASE_URL}/task/create`,
      method: 'POST',
      data: taskPayload,
    });
    console.log(response);

    const { data, status } = response;
    if (
      status == STATUS_CODE.CREATED &&
      data.message == 'Created Successfully'
    ) {
      return Promise.resolve({
        type: 'success',
        message: 'Created Successfully',
      });
    }
    let error = new CustomError('Failed During Creation', 'failure');
    return Promise.reject(error);
  } catch (err) {
    console.log(err);
    let error = new CustomError('Failed During Creation', 'failure');
    return Promise.reject(error);
  }
};

export const getTasks = async (): Promise<axiosGetResponseDto> => {
  try {
    const response: axiosDto = await axios({
      url: `${API_BASE_URL}/task`,
      method: 'GET',
    });
    console.log(response);

    const { data, status } = response;
    if (status == STATUS_CODE.SUCCESS && data.data?.length) {
      return Promise.resolve({
        type: 'success',
        data: data.data,
      });
    }
    let error = new CustomError('No Data Found', 'failure');
    return Promise.reject(error);
  } catch (err) {
    console.log(err);
    let error = new CustomError('No Data Found', 'failure');
    return Promise.reject(error);
  }
};

export const deleteTasks = async (
  id: string,
): Promise<axiosDeleteResponseDto> => {
  try {
    const response: axiosDto = await axios({
      url: `${API_BASE_URL}/task`,
      method: 'DELETE',
      data: { id },
    });
    console.log(response);

    const { status } = response;
    if (status == STATUS_CODE.SUCCESS) {
      return Promise.resolve({
        type: 'success',
      });
    }
    let error = new CustomError('No Data Found', 'failure');
    return Promise.reject(error);
  } catch (err) {
    console.log(err);
    let error = new CustomError('No Data Found', 'failure');
    return Promise.reject(error);
  }
};
