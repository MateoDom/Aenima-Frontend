import styled from "styled-components";

export const BlogLayout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #FFF;
   padding: 80px 30px;
   @media (max-width: 600px ) {
    padding: 80px 0;
   }
`
export const BlogCardContainer = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    display: block;
  }
`
export const TextContainerBlog = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    margin-left: 35px;
  }
`


export const CardColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

