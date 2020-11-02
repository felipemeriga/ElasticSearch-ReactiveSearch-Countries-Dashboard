export interface ICountryData {
    _id: string;
    name: string
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subRegion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: number;
    currencies: ICurrency[];
    languages: ILanguage[];
    translations: object;
    flag: string;
    regionalBlocs: object[];
    cioc: string;
}

export interface ICurrency {
    code: string;
    name: string;
    symbol: string;
}

export interface ILanguage {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}
