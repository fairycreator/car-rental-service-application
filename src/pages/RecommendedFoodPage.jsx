import image from '../assets/images/recommendedPage.png'
import { RecommendedList } from '../components/RecommendedFood/RecommendedList/RecommendedList';
import { RecImage, RecPageContentWrapper, RecPageWrapper, RecPageTitle } from '../components/RecommendedFood/RecommendedList/RecommendedList.styled';
import { RecommendedPageList } from '../components/RecommendedFood/RecommendedList/RecommendedList';

const RecommendedFoodPage = () => {


  return (
    <RecPageContentWrapper>
    <RecPageTitle>Recommented food</RecPageTitle>
    <RecPageWrapper>
    <RecImage src={image} alt="Page image"></RecImage>
      <RecommendedPageList />
      </RecPageWrapper>
    </RecPageContentWrapper>
)

};

export default RecommendedFoodPage;
