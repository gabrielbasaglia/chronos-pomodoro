import type { TaskModel } from '../components/models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel) {
  if (task.completedDate) return 'Concluída';
  if (task.interruptedDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em Progresso';
  return 'Abandonada';
}
