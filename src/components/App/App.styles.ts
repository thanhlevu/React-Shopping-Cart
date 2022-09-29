import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  padding: 20px;
  background: #add8e6;
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  &:hover {
    background: #83c7dd;
  }
`;
