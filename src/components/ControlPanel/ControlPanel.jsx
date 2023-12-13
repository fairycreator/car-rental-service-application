import { GoalNav } from "../GoalNav/GoalNav";
import { UserInfoNav } from "../UserInfoNav/UserInfoNav";
import { WeightNav } from "../WeightNav/WeightNav";

export const ControlPanel = () => {
    return (
        <div>
            <GoalNav />
            <WeightNav />
            <UserInfoNav />
        </div>
    )
};