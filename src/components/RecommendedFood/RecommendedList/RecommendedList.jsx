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
  CustomPagination,
} from './RecommendedList.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Grid, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';

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

export const RecommendedPageList = ({ numberOfCardsToRender }) => {
  const recommendedFoods = useSelector(selectRecFoods);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isDesktop = useMediaQuery({ minWidth: 1440 });

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
  return isDesktop ? (
    <>
      <StyledSwiper
        modules={[Autoplay, Pagination, Grid]}
        spaceBetween={30}
        slidesPerView={2}
        grid={{
          rows: 5,
          fill: 'row',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} my-bullet" data-index="${index}"></span>`;
          },
        }}
        className="mySwiper"
      >
        {recommendedFoods.map((item) => (
          <StyledSwiperSlide key={item.name}>
            <RecommendedCard {...item} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <CustomPagination />
    </>
  ) : (
    <RecList>
      {recommendedFoods.slice(0, numberOfCardsToRender).map((item) => (
        <RecommendedCard key={item.name} {...item} />
      ))}
    </RecList>
  );
};
