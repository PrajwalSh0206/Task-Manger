export interface taskDto {
  id?: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
}

export interface getTaskDto {
  completed?: boolean;
  important?: boolean;
}
