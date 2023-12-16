// import '../assets/fonts/Poppins-SemiBold.ttf';
import {
  Container,
  MealContainer,
  MealDashbord,
  MealImage,
  MealSubscription,
  MealSubText,
  MealTitle,
  Title,
  Wrapper,
} from './Planner.styled';

const Planner = () => {
  const iconPath = 'src/assets/images/sprite.svg';
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '20px',
        }}
      >
        <svg
          style={{
            display: 'inline-block',
            width: '16px',
            height: ' 16px',
            fill: 'white',
            rotate: '180deg',
          }}
        >
          <use href={`${iconPath}#icon-arrowright`}></use>
        </svg>
        <Title>Diary</Title>
      </div>
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src="src/assets/images/Breakfast image.png" />
          <MealTitle>Breakfast</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubText>Carbonohidrates: 11.2</MealSubText>
          <div
            style={{
              display: 'flex',
              //   marginTop: '12px',
              gap: '20px',
            }}
          >
            <MealSubText>Protein: 23.1</MealSubText>
            <MealSubText> Fat: 14</MealSubText>
          </div>
        </MealSubscription>
      </Wrapper>
      <MealDashbord style={{ marginTop: '20px' }} />
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src="src/assets/images/Breakfast image.png" />
          <MealTitle>Breakfast</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubText>Carbonohidrates: 11.2</MealSubText>
          <div
            style={{
              display: 'flex',
              //   marginTop: '12px',
              gap: '20px',
            }}
          >
            <MealSubText>Protein: 23.1</MealSubText>
            <MealSubText> Fat: 14</MealSubText>
          </div>
        </MealSubscription>
      </Wrapper>
      <MealDashbord style={{ marginTop: '20px' }} />
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src="src/assets/images/Breakfast image.png" />
          <MealTitle>Breakfast</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubText>Carbonohidrates: 11.2</MealSubText>
          <div
            style={{
              display: 'flex',
              //   marginTop: '12px',
              gap: '20px',
            }}
          >
            <MealSubText>Protein: 23.1</MealSubText>
            <MealSubText> Fat: 14</MealSubText>
          </div>
        </MealSubscription>
      </Wrapper>
      <MealDashbord style={{ marginTop: '20px' }} />
      <Wrapper>
        <MealContainer style={{ alignItems: 'center' }}>
          <MealImage src="src/assets/images/Breakfast image.png" />
          <MealTitle>Breakfast</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubText>Carbonohidrates: 11.2</MealSubText>
          <div
            style={{
              display: 'flex',
              //   marginTop: '12px',
              gap: '20px',
            }}
          >
            <MealSubText>Protein: 23.1</MealSubText>
            <MealSubText> Fat: 14</MealSubText>
          </div>
        </MealSubscription>
      </Wrapper>
      <MealDashbord style={{ marginTop: '20px' }} />
    </Container>
  );
};

export default Planner;
