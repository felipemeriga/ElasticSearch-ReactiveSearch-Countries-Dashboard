import React from 'react'
import styled from 'styled-components'
import CityIcon from 'components/Common/Icons/Menu/CityIcon';
import MoneyIcon from '../../Icons/Menu/MoneyIcon';
import RegionIcon from '../../Icons/Menu/RegionIcon';
import {ICountryData} from '../../../../utils/types';

const TextStyles = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #92929d;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 15px 0 10px 0;
`;
const Status = styled(TextStyles)`
  margin: 0 15px 0 20px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    fill: #92929d;
    width: 14px;
    height: 14px;
  }
`;

interface IInfoProps {
  data: ICountryData
}

const Info: React.FC<IInfoProps> = props => {
  const { data } = props;

  return (
    <Wrapper>
      <Status>
        <CityIcon />
          {data.capital}
      </Status>
      <Status>
        <MoneyIcon />
          {data.currencies[0].symbol}
      </Status>
        <Status>
            <RegionIcon />
            {data.region}
        </Status>
    </Wrapper>
  )
};

export default Info
