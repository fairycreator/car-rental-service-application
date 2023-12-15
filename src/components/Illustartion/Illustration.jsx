import { Illustration as StyledIllustration } from './Illustration.styled';

function Illustration({ pathname }) {
  return <StyledIllustration $pathname={pathname} />;
}

export default Illustration;
