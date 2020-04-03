import React from "react";
import Styled from "styled-components";

const FooterDiv = Styled.div`
width:100% !important;
background:#08A6C9;
color:white;
height:40px;
z-index:2;
bottom:0 !important;
position: relative;
text-align: center;
margin-top: 500px;

`;

function Footer() {
  return (
    <>
      <FooterDiv>
        <h1>Save this Job</h1>
      </FooterDiv>
    </>
  );
}
export default Footer;
