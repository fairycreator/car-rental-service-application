
import { useSelector } from "react-redux";
import { BoxContent, ContainerNav } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { Navigation } from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerNav>
      <BoxContent>
        <Logo />
        {isLoggedIn ?
          <ControlPanel /> : <Navigation />}
      </BoxContent>
    </ContainerNav>
  );
};