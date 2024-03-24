import { taskDto } from './task.dto';

export interface axiosDto {
  data: {
    message: string;
    data?: Array<taskDto>;
  };
  status: number;
}

type type = 'success' | 'failure';

export interface axiosCreateResponseDto {
  message: string;
  type: type;
}

export interface axiosGetResponseDto {
  type: type;
  data: Array<taskDto>;
}
