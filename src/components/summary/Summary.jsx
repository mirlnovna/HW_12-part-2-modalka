import styled from "styled-components";
import  BackgroundImg  from "../../assets/image/summaryImg.jpg";
import SummaryInfoCard from "../summary/SummaryInfoCard"

const Summary = ()=>{
return (
  <Container>
    <StyledImg src={BackgroundImg} />
    <SummaryInfoCard/>
  </Container>
);
}

export default Summary;


const Container = styled.div`
   height: 527;
`
    
const StyledImg = styled.img`
  height: 432px;
  width: 100%;
`;

