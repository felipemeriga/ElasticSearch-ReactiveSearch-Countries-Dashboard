import {AxiosPromise, AxiosRequestConfig} from 'axios';
import axiosInstance from './axios';

// interface IApiRequest {
//     method: string;
//     endpoint: string;
//     data: object,
//     headers: object
// }

export interface ICountryData {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: number;
    currencies: object[];
    languages: object[];
    translations: object;
    flag: string;
    regionalBlocs: object[];
    cioc: string;
}

export interface ITestData {
    dates: object;
    namedays: object;
}

const promise = <T>(axiosPromise: AxiosPromise): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        // tslint:disable-next-line:no-debugger
        debugger;
        axiosPromise
            .then(response => {
                // tslint:disable-next-line:no-debugger
                debugger;
                resolve(response.data);
            })
            .catch(error => {
                // tslint:disable-next-line:no-debugger
                debugger;
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    reject({
                        status: error.response.status,
                        message: error.response.data
                    });
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    reject({
                        status: 444,
                        message: 'The request was made but no response was received'
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    reject({
                        status: 417,
                        message: 'Something happened in setting up the request that triggered an Error'
                    });
                }
                // console.log(error.config);
            });
    });
};

export const makeApiCall = <T>(request: AxiosRequestConfig): Promise<T> => {
    return promise<T>(axiosInstance.get('/name/brazil', request));
};

export default makeApiCall;
