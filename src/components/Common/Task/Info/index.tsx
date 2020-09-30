import React from 'react'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import CityIcon from 'components/Common/Icons/Menu/CityIcon';
import MoneyIcon from '../../Icons/Menu/MoneyIcon';
import RegionIcon from '../../Icons/Menu/RegionIcon';

const TextStyles = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #92929d;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 15px 0 10px 0;
`;
const Attach = styled(TextStyles)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
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
  data: ITaskState
}

const Info: React.FC<IInfoProps> = props => {
  const { data } = props;

  return (
    <Wrapper>
      <Status>
        <CityIcon />
        {data.attach}
      </Status>
      <Status>
        <MoneyIcon />
        {data.status}
      </Status>
        <Status>
            <RegionIcon />
            {data.status}
        </Status>
    </Wrapper>
  )
};

export default Info
