import React from 'react'
import styled from 'styled-components'
import Info from 'components/Common/CountryCard/Info'
import Titles from 'components/Common/CountryCard/Titles'
import {ICountryData} from '../../../utils/types';
import CountryModal from '../CountryModal';

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  cursor: pointer;
  border-radius: 20px;
  padding: 15px;
  margin: 0px 0px 20px 20px;
  background-color: #e0f1f9;
`;

interface ICountryCardProps {
  data: ICountryData
  key: string
}

const CountryCard: React.FC<ICountryCardProps> = props => {
  const { data } = props;

  const [modal, setModal] = React.useState<boolean>(false);

  const toggleModal = (): void => {
    setModal(prevState => !prevState)
  };

  return (
    <>
      <Wrapper
        {...props}
        onClick={toggleModal}
      >
        <Titles data={data} />
        <Info data={data} />
      </Wrapper>
      <>{modal && <CountryModal country={data} onClose={toggleModal} />}</>
    </>
  )
};

export default CountryCard
