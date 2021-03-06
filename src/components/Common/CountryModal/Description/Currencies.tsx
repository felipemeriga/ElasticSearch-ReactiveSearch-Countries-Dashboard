import React from 'react'
import MoneyIcon from '../../Icons/Menu/MoneyIcon';
import {HeaderD, ShapeWrapper, TextD, TitleD, Wrapper} from './DescriptionStructure';
import {ICurrency} from '../../../../utils/types';

interface ICurrenciesProps {
    currencies: ICurrency[];
}

type Props = ICurrenciesProps;
const Currencies: React.FC<Props> = props => {
    const {currencies} = props;

    const displayCurrencyInfo = (currencies: ICurrency[]) => {
       return ( currencies.map((currency: ICurrency) => {
            return (
                <TextD key={currency.code}>
                    {currency.name}({currency.code})
                </TextD>
            )
        })
       )
    };
  return (
    <Wrapper>
        <ShapeWrapper>
            <MoneyIcon />
        </ShapeWrapper>
      <HeaderD>
        <TitleD>Currencies:</TitleD>
      </HeaderD>
        {displayCurrencyInfo(currencies)}
    </Wrapper>
  )
};

export default Currencies
