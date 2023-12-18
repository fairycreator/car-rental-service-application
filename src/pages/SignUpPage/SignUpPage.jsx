// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// // import image from '../../assets/backgroundImages/welcomepage.png';
// import {
//   SignUpContainer,
//   SignUpDiv,
//   Frame,
//   SignUpTitle,
//   SignUpMessage,
//   // Image,
// } from './SignUpPage.styled';

// const SignUpPage = () => {
//   return (
//     <SignUpContainer>
//       {/* <Image src={image} alt="Activity trtacker" /> */}
//       <SignUpDiv>
//         <Frame>
//           <SignUpTitle>Sign up</SignUpTitle>
//           <SignUpMessage>You need to register to use the service</SignUpMessage>
//         </Frame>
//         <SignUpForm />
//       </SignUpDiv>
//     </SignUpContainer>
//   );
// };

// export default SignUpPage;

import { createContext, useState } from 'react';
import SignUp from '../../components/SignUpSteps/SignUp';
import GoalSelectionStep from '../../components/SignUpSteps/SignUpYourGoal';
import SelectGender from '../../components/SignUpSteps/SignUpGender';
import BodyParameters from '../../components/SignUpSteps/SignUpBodyParams';
import ActivityLevel from '../../components/SignUpSteps/SignUpActivity';

export const SignUpContext = createContext();

export const SignUpProcessPage = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    goal: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    activityLevel: '',
  });

  const prevStage = () => setCurrentStage(currentStage - 1);
  const nextStage = () => setCurrentStage(currentStage + 1);
  const addSignUpData = (newData) =>
    setSignUpData({ ...signUpData, ...newData });

  const stages = [
    SignUp,
    GoalSelectionStep,
    SelectGender,
    BodyParameters,
    ActivityLevel,
  ];
  const CurrentStage = stages[currentStage];

  return (
    <SignUpContext.Provider
      value={{ prevStage, nextStage, signUpData, addSignUpData, currentStage }}
    >
      <CurrentStage />
    </SignUpContext.Provider>
  );
};

export default SignUpProcessPage;
