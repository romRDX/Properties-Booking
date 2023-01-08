import { useCallback } from 'react';
import  debounce from "../../utils/debounce";
import { Container } from "./SearchField.styles";
import { BsSearch } from 'react-icons/bs';
import { useFilter } from '../../hooks/useFilter';

const SearchField = () => {

    const { setFilter } = useFilter();

    const handleOnType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }, [setFilter]);

    const debouncedOnType = debounce(handleOnType, 1000);

    return (
        <Container>
            <BsSearch />
            <input onChange={debouncedOnType} placeholder="Search" />
        </Container>
    );
};

export default SearchField;
