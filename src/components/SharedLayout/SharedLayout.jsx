import { Suspense } from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container, AppTitle } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Container>
            <AppTitle>Healthy Hub</AppTitle>
            <Suspense fallback={
              <PuffLoader color="var(--primary-color-green-lite)" cssOverride={{ margin: '30vh auto 0 auto' }} />
            }>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
