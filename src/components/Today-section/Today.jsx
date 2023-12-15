import { Link } from 'react-router-dom';
import { DailyGoal } from './DailyGoal/DailyGoal';
import { Food } from './Food/Food';
import { Water } from './Water/Water';

export const Today = () => {
  return (
    <>
      <h2>Today</h2>
      <Link to="/dashboard">On the way to the goal</Link>
      <DailyGoal />
      <Food />
      <Water />
    </>
  );
};
