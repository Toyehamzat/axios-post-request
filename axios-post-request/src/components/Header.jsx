import styled from "styled-components";
export default function Header() {
  return (
    <HeaderContainer>
      <Axios>
        <Span>Axios</Span> Tutorial
      </Axios>
      <Title>Post Request</Title>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
margin-bottom:55px;
 `
;
const Axios = styled.h1``;

const Title = styled.h1``;

const Span = styled.span`
color:purple;
`;
