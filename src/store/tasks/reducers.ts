import {
  FETCH_TASKS,
  DELETE_TASK,
  ITaskState,
  ITasksFetchTasksAction,
  ITasksDeleteTasksAction
} from 'store/tasks/types'

type Actions =
  | ITasksFetchTasksAction
  | ITasksDeleteTasksAction

const initialState: ITaskState[] = [];

export function tasks(state = initialState, action: Actions): ITaskState[] {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TASKS:
      return [...state, ...action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== payload);
    default:
      return state
  }
}
