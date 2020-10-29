import React from 'react'
import styled from 'styled-components'

const WithAvatarWrapper = styled.img`
  width: 64px;
  height: 64px;
  cursor: not-allowed;
  border-radius: 32px;
   background-repeat: no-repeat;
  background-image: url("${(props: IFlagProps) => props.url}");
`;

interface IFlagProps {
  url: string;
}

const Flag: React.FC<IFlagProps> = props => {
  return (
    <>
      <WithAvatarWrapper {...props} src={props.url} alt='User avatar' />
    </>
  )
};

export default Flag;
