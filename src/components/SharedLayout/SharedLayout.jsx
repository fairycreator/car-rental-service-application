import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container, AppTitle } from './SharedLayout.styled';
import { Loader } from '../../helpers/Loader';

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
            <Suspense fallback={<Loader />}>
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
