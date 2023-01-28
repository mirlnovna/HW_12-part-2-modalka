import styled from "styled-components";
import BasketButton from "./BasketButton";

const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 101px;
  background-color: rgb(138, 43, 6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
`;

const Logo = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  font-family: Poppins, sans-serif;
`;
