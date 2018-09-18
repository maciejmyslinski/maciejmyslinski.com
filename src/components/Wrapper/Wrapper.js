import styled from 'styled-components';
import { scaled } from '../utils/cssLocks';

export default styled.div`
  margin: 0 ${scaled()} ${scaled()};
  display: flex;
  flex-flow: column;
`;
