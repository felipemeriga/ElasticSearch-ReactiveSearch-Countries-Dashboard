import React from 'react'
import styled from 'styled-components'
import MoneyIcon from '../../Icons/Menu/MoneyIcon';
import {ICurrency} from '../../../Main/Content/Tasks';

const variables = {
  colorGray: '#92929d'
};
const Wrapper = styled.div`
  display: flex;
  svg {
    fill: ${variables.colorGray};
  }
`;
const ShapeWrapper = styled.div`
  width: 20px;
`;
const HeaderD = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const TitleD = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
`;
const TextD = styled.span`
  margin-left: 10px;
  color: ${variables.colorGray};
  font-size: 14px;
`;

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
