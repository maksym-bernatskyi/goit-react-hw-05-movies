import PropTypes from "prop-types";
import { InputContainer, ButtonSubmit, Input, IconSearch } from "./Form.styled";

const Form = ({ handleSubmit, handleInputChange, query }) => {
    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>
                {query ? 
                (<Input placeholder="Type to search" type="text" onChange={handleInputChange} />) 
                : 
                (<Input placeholder="Type to search" type="text" onChange={handleInputChange} />)
                }

                <ButtonSubmit type="submit">
                    <IconSearch size={30} />
                </ButtonSubmit>
            </InputContainer>
        </form>
    );
};

export default Form;

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
};