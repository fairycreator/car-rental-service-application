import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SignUp from '../components/SignUpSteps/SignUpStep/SignUp';
import GoalSelectionStep from '../components/SignUpSteps/GoalStep/SignUpYourGoal';
import SelectGender from '../components/SignUpSteps/AgeGenderStep/SignUpGender';
import BodyParameters from '../components/SignUpSteps/BodyParametersStep/SignUpBodyParams';
import ActivityLevel from '../components/SignUpSteps/ActivityStep/SignUpActivity';
import { SignUpContainer } from '../components/SignUpSteps/SignUpStep/signUp.styled';
import { signUpSchema } from '../schemas/signUpSchema';

Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-bottom',
  clickToClose: true,
  messageMaxLength: 200,
  timeout: 5000,
  width: '300px',
});

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextPage = () => {
    console.log('Next button clicked');
    setCurrentStep(currentStep + 1);
  };
  const backPage = () => {
    console.log('Back button clicked');
    setCurrentStep(currentStep - 1);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('Lose Fat');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');

  const dispatch = useDispatch();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      await signUpSchema.validate(formData, { abortEarly: false });

      setName(formData.name);
      setEmail(formData.email);
      setPassword(formData.password);

      nextPage();
    } catch (err) {
      Notify.failure(err.errors.join(', '));
    }
  };
  const handleGoalSelectionStep = (values) => {
    const selectedGoal = values.goal;
    setGoal(selectedGoal);
    console.log('Form data being sent:', values);
    nextPage();
  };

  const handleSelectGender = (values) => {
    const selectedGender = values.gender;
    const selectedAge = values.age;

    setGender(selectedGender);
    setAge(selectedAge);
    console.log('Form data being sent:', values);
    nextPage();
  };

  const handleBodyParameters = (values) => {
    const selectedHeight = values.height;
    const selectedWeight = values.weight;

    setHeight(selectedHeight);
    setWeight(selectedWeight);
    console.log('Form data being sent:', values);
    nextPage();
  };

  const handleActivityLevel = (values) => {
    const selectedActivity = values.activity;
    setActivityLevel(selectedActivity);

    dispatch(
      registerUser({
        name,
        email,
        password,
        goal,
        gender,
        age,
        height: Number(height),
        weight: Number(weight),
        activityLevel: Number(selectedActivity),
      })
    ).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        Notify.success(`Hey ${name}, you're all set! Let's get started!`);
      } else {
        Notify.failure('There was a problem with your registration.');
      }
    });
  };

  return (
    <SignUpContainer>
      {currentStep === 0 && (
        <SignUp
          onForm={handleSignUp}
          nameValue={name}
          emailValue={email}
          passwordValue={password}
        />
      )}
      {currentStep === 1 && (
        <GoalSelectionStep
          onForm={handleGoalSelectionStep}
          onBackPage={backPage}
          goal={goal}
        />
      )}
      {currentStep === 2 && (
        <SelectGender
          onForm={handleSelectGender}
          onBackPage={backPage}
          gender={gender}
          ageValue={age}
        />
      )}
      {currentStep === 3 && (
        <BodyParameters
          onForm={handleBodyParameters}
          onBackPage={backPage}
          heightValue={height}
          weightValue={weight}
        />
      )}
      {currentStep === 4 && (
        <ActivityLevel
          onForm={handleActivityLevel}
          onBackPage={backPage}
          activity={activityLevel}
          setActivity={setActivityLevel}
        />
      )}
    </SignUpContainer>
  );
};

export default SignUpPage;
