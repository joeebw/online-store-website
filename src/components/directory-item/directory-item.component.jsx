import {useNavigate} from 'react-router-dom';
import {BackGroundImage, Body, DirectoryItemContainer} from './directory-item.styles.component.jsx'

const DirectoryItem = ({category}) => {

    const {title, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route); 

    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackGroundImage
                 imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )

}

export default DirectoryItem;