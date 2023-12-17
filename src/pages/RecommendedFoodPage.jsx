import image from '../assets/images/recommendedPage.png'
import { RecommendedList } from '../components/RecommendedFood/RecommendedList/RecommendedList';
import { RecImage, RecPageWrapper } from '../components/RecommendedFood/RecommendedList/RecommendedList.styled';
const RecommendedFoodPage = () => {


  return <div>
    <h2>Recommented food</h2>
    <RecPageWrapper>
    <RecImage src={image} alt="Page image"></RecImage>
      <RecommendedList />
      </RecPageWrapper>
</div>;

};

export default RecommendedFoodPage;
