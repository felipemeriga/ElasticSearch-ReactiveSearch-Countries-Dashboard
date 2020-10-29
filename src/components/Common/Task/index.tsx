import React from 'react'
import styled from 'styled-components'
import Info from 'components/Common/Task/Info'
import Titles from 'components/Common/Task/Titles'
import TaskModal from '../TaskModal';
import {ICountryData} from '../../../utils/types';

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  cursor: pointer;
  border-radius: 20px;
  padding: 15px;
  margin: 0px 0px 20px 20px;
  background-color: #e0f1f9;
`;

interface ITaskProps {
  data: ICountryData
  key: string
}

const Task: React.FC<ITaskProps> = props => {
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
      <>{modal && <TaskModal country={data} onClose={toggleModal} />}</>
    </>
  )
};

export default Task
