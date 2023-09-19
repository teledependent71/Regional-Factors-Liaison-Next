import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Regional Factors Liaison</title>
          <meta
            property="og:title"
            content="test-page - Regional Factors Liaison"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_rl50rq) => (
            <>
              <h1>{context_rl50rq?.Name}</h1>
            </>
          )}
          initialData={props.contextRl50rqProp}
          persistDataDuringLoading={true}
          key={props?.contextRl50rqProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextRl50rqProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextRl50rqProp: contextRl50rqProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
