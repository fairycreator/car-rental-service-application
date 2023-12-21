import { GoalNav } from "../GoalNav/GoalNav";
import { UserInfoNav } from "../UserInfoNav/UserInfoNav";
import { WeightNav } from "../WeightNav/WeightNav";
import { Container, Box } from "./ControlPanel.styled";

export const ControlPanel = () => {
    return (
        <Box>
            <Container>
                <GoalNav />
                <WeightNav />
            </Container>
            <UserInfoNav />
        </Box>
    )
};