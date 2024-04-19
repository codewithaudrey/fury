import { useWeb3Modal } from '@web3modal/wagmi/react';
import React, { Fragment } from 'react';

const HomePage = () => {
  const { open } = useWeb3Modal();

  return (
    <Fragment>
      <button
        onClick={() => open()}
        className='text-[1.4rem] bg-red-3 capitalize font-[500] bg-lime-200 p-3 rounded-sm mx-auto mt-96'
      >
        connect wallet
      </button>
      <button onClick={() => open({ view: 'Networks' })}>
        Open Network Modal
      </button>
    </Fragment>
  );
};

export default HomePage;
