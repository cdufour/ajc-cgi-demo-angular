export interface Todo {
  id?: number; // champ optionnel
  userId: number;
  title: string;
  completed: boolean;
}