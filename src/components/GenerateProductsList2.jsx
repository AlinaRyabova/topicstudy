import { Wrapper, Title } from './Wrapper.styled';

const GenerateProductsList2 = props => {
  const { data } = props;
  return data.map(product => (
    <Wrapper key={product.id}>
      <img src={product.thumbnail} alt="..." />
      <div>
        <Title>{product.title}</Title>
        <p>{product.description}</p>
        <a href="_">{product.price}</a>
      </div>
    </Wrapper>
  ));
};
export default GenerateProductsList2;
