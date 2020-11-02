import React from 'react'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import Header from 'components/Common/Header'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import {ReactiveBase} from '@appbaseio/reactivesearch';
import {ELASTIC_SEARCH_COLLECTION, ELASTIC_SEARCH_URL} from '../../utils/constants';

const Content = React.lazy(() => import('components/Main/Content'));

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <>
        <ReactiveBase
            app={ELASTIC_SEARCH_COLLECTION}
            url={ELASTIC_SEARCH_URL}
        >
      <Header />
      <Wrapper>
        <ErrorBoundary>
          <React.Suspense fallback={<Loader />}>
            <Content />
          </React.Suspense>
        </ErrorBoundary>
      </Wrapper>
        </ReactiveBase>
    </>
  )
};

export default Main
