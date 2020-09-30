import {FETCH_COUNTRIES, ICountryData, ICountryFetchAction} from './types';

const initialState: ICountryData[] = [];

type Actions =
    | ICountryFetchAction

export function countries(state = initialState, action: Actions): ICountryData[] {
    const { type } = action;
    switch (type) {
        case FETCH_COUNTRIES:
            return [...state, ...action.payload];
        default:
            return state
    }
}
