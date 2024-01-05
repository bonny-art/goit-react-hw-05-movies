import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { ScrollToTopBtn } from 'components';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollToTopBtn />
      </main>
    </>
  );
};
