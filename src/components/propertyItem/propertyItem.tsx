import { Container } from './propertyItem.styles';
import { Property } from "../../types";
import { useNavigate } from "react-router-dom";

interface PropertyItemProps {
    property: Property;
}

const PropertyItem = ({ property }: PropertyItemProps) => {

    const navigate = useNavigate();
    
    return (
        <Container onClick={() => navigate(`/property/${property.id}`)}>
            <img loading='lazy' src="/house-img.jpg" alt="House property" />
            <div>
                <h3>{ property.name}</h3>
                <p><span>Address:</span> { property.address}</p>
                <p><span>Description:</span> { property.description }</p>
            </div>
        </Container>
    )
};

export default PropertyItem;
