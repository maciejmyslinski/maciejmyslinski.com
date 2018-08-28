import styled from 'styled-components';
import avatar from '../../images/avatar.png';

const Avatar = styled.img`
  width: 12.5rem;
  border-radius: 12.5rem;
  margin: 0 auto;
`;

Avatar.defaultProps = {
  src: avatar,
};

export default Avatar;
