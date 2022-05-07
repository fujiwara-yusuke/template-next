import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <header>
        <Link href='/'>
          <a>title</a>
        </Link>
      </header>
      <div className='content'>{children}</div>
    </div>
  );
};

const HeaderCustom = styled.header`
  height: 75px;
  background: #6495ED;
  a{
    color: #FFF;
    font-size: 50px;
  }
`

export default Layout;
