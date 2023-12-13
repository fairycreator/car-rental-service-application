import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/authSelectors"
import { Logo } from "../Logo/Logo"
import { ControlPanel } from "../ControlPanel/ControlPanel"
import { Navigation } from "../Navigation/Navigation"
import { ContainerNav } from "./Header.styled"

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <ContainerNav>
      <Logo />
      {isLoggedIn ?
      <ControlPanel/> : <Navigation/>}
</ContainerNav>
  )
}



// import {
//   HeaderContainer,
//   Navigation,
//   StyledLink,
//   IconWrapper,
// } from './Header.styled';

// export const Header = () => {
//   return (
//     <HeaderContainer>
//       <Navigation>
//         <StyledLink to="/welcome">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           welcome
//         </StyledLink>
//         <StyledLink to="/signup">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           signup
//         </StyledLink>
//         <StyledLink to="/signin">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           signin
//         </StyledLink>
//         <StyledLink to="/forgot-password">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           forgot-password
//         </StyledLink>
//         <StyledLink to="/main">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           main
//         </StyledLink>
//         <StyledLink to="/dashboard">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           dashboard
//         </StyledLink>
//         <StyledLink to="/diary">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           diary
//         </StyledLink>
//         <StyledLink to="/recommended-food">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           recommended-food
//         </StyledLink>{' '}
//         <StyledLink to="/settings">
//           <IconWrapper>
//             <use href="" />
//           </IconWrapper>
//           settings
//         </StyledLink>
//       </Navigation>
//     </HeaderContainer>
//   );
// };
