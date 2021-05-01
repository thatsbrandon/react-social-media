import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BaseLink = styled(Link)`
  text-decoration: none;
  color: white;
  
  &:focus, &:hover, &:visted, &:link, &:active {
    text-decoration: none;
  }
`;

export default BaseLink;