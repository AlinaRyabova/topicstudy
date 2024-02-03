import styled from 'styled-components';

// export const Wrapper = styled.div`
//   width: 300px;
//   background-color: aqua;
// `;

export const Wrapper = styled(`div`)(props => {
  return {
    width: `500px`,
    backgroundColor: `aqua`,
  };
});

export const Title = styled.h1`
  color: blue;
`;
