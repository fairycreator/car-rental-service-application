
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { Logo } from "../Logo/Logo";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { Navigation } from "../Navigation/Navigation";
import { BoxContent, ContainerNav } from "./Header.styled";

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
  )
};