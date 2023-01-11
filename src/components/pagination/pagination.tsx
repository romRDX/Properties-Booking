import { Container } from "./pagination.styles";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {

    const handleNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage( prev => prev+1);
        }
    }

    const handlePreviousPage = () => {
        if(currentPage > 1){
            setCurrentPage( prev => prev-1);
        }
    }

    return (
        <Container>
            <BsFillArrowLeftCircleFill data-testid="arrow-left" onClick={handlePreviousPage} size={30} />
            <ul>
                {
                    Array.from(Array(totalPages)).map((x, index) => (
                        <li 
                            onClick={() => setCurrentPage(index+1)}
                            key={index}
                            className={ currentPage === index+1 ? "isActive" : ""}
                        >
                            {index+1}
                        </li>
                    ))
                }
            </ul>
            <BsFillArrowRightCircleFill data-testid="arrow-right" onClick={handleNextPage} size={30} />
        </Container>
    )
};

export default Pagination;
