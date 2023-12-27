import PuffLoader from 'react-spinners/PuffLoader';
import sprite from 'assets/images/sprite.svg';
import { RecommendedCard } from '../RecommendedCard/RecommendedCard';
import {
  selectRecFoods,
  selectIsLoading,
  selectError,
} from '../../../redux/recomendedFoods/recSelectors';
import {
  RecList,
  RecLink,
  Image,
  RecLinkWrapper,
  RecForMainWrapper,
  RecListTitle,
  StyledSwiper,
  StyledSwiperSlide,
} from './RecommendedList.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export const RecommendedList = () => {
  const recommendedFoods = useSelector(selectRecFoods);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 834) {
        setNumberOfCardsToRender(4);
      } else {
        setNumberOfCardsToRender(2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isLoading) {
    return (
      <PuffLoader
        color="var(--primary-color-green-lite)"
        cssOverride={{ margin: '30vh auto 0 auto' }}
      />
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <RecForMainWrapper>
      <RecListTitle>Recommended food</RecListTitle>
      <RecList className="rec-list">
        {recommendedFoods.slice(0, numberOfCardsToRender).map((item) => (
          <RecommendedCard key={item.name} {...item} />
        ))}
      </RecList>
      <RecLinkWrapper>
        <RecLink to="/recommended-food">
          See more
          <Image>
            <use href={`${sprite}#icon-arrowright`}></use>
          </Image>
        </RecLink>
      </RecLinkWrapper>
    </RecForMainWrapper>
  );
};

export const RecommendedPageList = () => {
  const recommendedFoods = useSelector(selectRecFoods);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return (
      <PuffLoader
        color="var(--primary-color-green-lite)"
        cssOverride={{ margin: '30vh auto 0 auto' }}
      />
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <StyledSwiper
      modules={[Pagination, Grid]}
      spaceBetween={30}
      slidesPerView={2}
      grid={{
        rows: 5,
        fill: 'row',
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {recommendedFoods.map((item) => (
        <StyledSwiperSlide key={item.name}>
          <RecommendedCard {...item} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
};
