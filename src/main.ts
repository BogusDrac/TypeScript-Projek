
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  urgency: 'low' | 'medium' | 'high';
  dateCreated: Date;
  deadlineDate: Date;
}


const tasks: Task[] = [
  {
    id: 1,
    title: 'Complete TypeScript project',
    description: 'Finish the TypeScript project and submit it by the due date.',
    completed: false,
    urgency: 'high',
    dateCreated: new Date('2024-11-01'),
    deadlineDate: new Date('2024-11-15')
  }
]

console.log(tasks)