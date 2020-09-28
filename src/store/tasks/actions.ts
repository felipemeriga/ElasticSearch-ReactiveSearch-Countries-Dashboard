import instance from 'utils/axios'
import { Dispatch } from 'redux'
import {
  FETCH_TASKS,
  DELETE_TASK,
  ITasksDeleteTasksAction
} from 'store/tasks/types'
import makeApiCall, {ICountryData, ITestData} from '../../utils/api';

export const fetchTasks = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    // tslint:disable-next-line:no-debugger
    debugger;
    const ae: Promise<ICountryData[]>  = await makeApiCall<ICountryData[]>({});
    // tslint:disable-next-line:no-debugger
    debugger;
    const { data } = await instance.get('https://square-dashboard-6ffae.firebaseio.com/tasks.json');
    dispatch({ type: FETCH_TASKS, payload: data })
  } catch (err) {
    console.error(`[Action: fetchTasks] - ${err}`)
  }
};

export const deleteTask = (id: string): ITasksDeleteTasksAction => {
  return {
    type: DELETE_TASK,
    payload: id
  }
};
