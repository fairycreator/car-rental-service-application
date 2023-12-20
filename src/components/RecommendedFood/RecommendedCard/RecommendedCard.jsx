

// import image from '../../../assets/images/loseFat.png'
import {
    RecCard,
    Image,
    CardTextWrapper,
    CardTitle,
    CardCalloriesWrapper, 
    CardWeight, 
    CardCallories
} from './RecommendedCard.styled'; 

// export const RecommendedCard = (
//    ) =>
// { return (
//     <RecCard>
//         < Image src={image} alt="img" ></Image>
//         <CardTextWrapper>
//             <CardTitle>Avocado</CardTitle>
//          <CardCalloriesWrapper>
//                 <CardWeight>100 g</CardWeight>
//                 <CardCallories>200 calories</CardCallories>
//          </CardCalloriesWrapper>
//         </CardTextWrapper>

//     </RecCard>
//     )
//     }



export const RecommendedCard = ({
   
        name,
        amount,
        img,
        calories
    }) =>
{
    

    return (
    <RecCard>
        < Image src={img} alt="img" ></Image>
        <CardTextWrapper>
            <CardTitle>{name }</CardTitle>
         <CardCalloriesWrapper>
                <CardWeight>{ amount}</CardWeight>
                <CardCallories>{calories} calories</CardCallories>
         </CardCalloriesWrapper>
        </CardTextWrapper>

    </RecCard>)
    }
