import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBioSection>
      <Parallax1>
        <StyledH1>
          Grow the reach of your business or school with a website!
        </StyledH1>
        <Image />
        <StyledDotGrid />
      </Parallax1>
      <Parallax2>
        <StyledBioText>
          <p>Hey there!</p>
          <p>
            Would a website with regular updates about your current schedule and
            offers help people find you?
          </p>
          <p>Let's discuss and develop any ideas you have!</p>
        </StyledBioText>
      </Parallax2>
      <Parallax2>
          <StyledForm method="post" action="https://formspree.io/mayjekjk">
            <StyledLable>
              Your name:
              <StyledInput type="text" name="name" />
            </StyledLable>
            <StyledLable>
              Your email:
              <StyledInput type="email" name="_replyto" />
            </StyledLable>
            <StyledLable>
              Your message:
              <StyledTextArea name="message"></StyledTextArea>
            </StyledLable>
            <input type="text" name="_gotcha" style={{display:"none"}} />
            <StyledSubmitButton type="submit">Send</StyledSubmitButton>
        </StyledForm>
      </Parallax2>
    </StyledBioSection>
  </Layout>
)

const StyledBioText = styled.div`
  z-index: 100;
  margin: 1rem;
`

const StyledLable = styled.label`
  display: block;
  margin: 1em;
`

const StyledSubmitButton = styled.button`
  background: ${({ theme }) => theme.glassesRed};
  color: ${({ theme }) => theme.bkgWhite};
  border-radius: 0;
  font-family: monospace;
  font-weight: bolder;
  font-size: 1.6em;
`

const StyledInput = styled.input`
  display: block;
`

const StyledTextArea = styled.textarea`
  display: block;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.glassesRed};
  border-radius: 25px;
  margin: 0 10%;
  padding: 3em;
`

const StyledH1 = styled.h1`
  z-index: 100;
  margin: 1rem;
  color: ${({ theme }) => theme.bkgWhite};
  background-color: black;
  width: 33vw;
  padding: 0.5em;
`

const Parallax1 = styled.div`
  height: 20em;
  position: relative;
  display: flex;
  align-items: center;
`

const Parallax2 = styled.div`
  height: 20em;
  position: relative;
  left: 0;
  z-index: 100;
  background: ${({ theme }) => theme.bkgWhite};
`

const StyledBioSection = styled.div`
  display:flex;
  flex-direction: column;
  // @media (max-width: ${({ theme }) => theme.mobile}) {
  // }
`

const StyledDotGrid = styled.div`
  z-index: 2;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEklEQVR42mNg+M8AAhASDUClAEXeA/1LlYqzAAAAAElFTkSuQmCC);
  opacity: 0.75;
  filter: alpha(opacity=75);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 20em;
`

export default IndexPage
