import makeApiCall from '../../utils/api';
import {ICountryData} from './types';
import {FETCH_TASKS} from '../tasks/types';
import {Dispatch} from 'redux';

export const fetchCountries = () => async (dispatch: Dispatch): Promise<void> => {
    try {
        const countries: ICountryData[] = await makeApiCall<ICountryData[]>({});
        dispatch({ type: FETCH_TASKS, payload: countries })
    } catch (err) {
        console.error(`[Action: fetchTasks] - ${err}`)
    }
};
