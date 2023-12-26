import { useMediaQuery } from 'react-responsive';
import { GoalNav } from "../GoalNav/GoalNav";
import { UserInfoNav } from "../UserInfoNav/UserInfoNav";
import { WeightNav } from "../WeightNav/WeightNav";
import { DesktopContainer, Box } from "./ControlPanel.styled";
import { MobileContainer } from '../MobileContainer/MobileContainer';

export const ControlPanel = () => {
    const mobileVersion = useMediaQuery({ query: '(max-width:833px)' });
    
    return (
        <Box>
            {mobileVersion ? (
                <MobileContainer />
            ) : (
                <DesktopContainer>
                    <GoalNav />
                    <WeightNav />
                </DesktopContainer>)}
            <UserInfoNav />
        </Box>
    );
};