export interface UsernameTaskCount {
  username: string,
  taskCount: number
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'TODO' | 'COMPLETED'
}
