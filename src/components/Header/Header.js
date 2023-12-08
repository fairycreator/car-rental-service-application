import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  NavigateItem,
  NavigateLink,
  Navigation,
  PageList,
} from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navigation>
          <PageList>
            <NavigateItem>
              <NavigateLink to="/">Home</NavigateLink>
            </NavigateItem>
            <NavigateItem>
              <NavigateLink to="/catalog">Catalog</NavigateLink>
            </NavigateItem>
            <NavigateItem>
              <NavigateLink to="/favorites">Favorites</NavigateLink>
            </NavigateItem>
          </PageList>
        </Navigation>
      </HeaderContainer>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
