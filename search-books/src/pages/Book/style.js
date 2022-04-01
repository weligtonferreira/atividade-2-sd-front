import styled from "styled-components";

export const BookDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const BookImage = styled.img`
  height: 300px;
  margin-top: 5rem;
  margin-bottom: 0.4rem;
  border-radius: 0.6rem;

  &:hover {
    box-shadow: 0px 0px 2px 2px var(--primary-gray);
  }
`;

export const BookTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 auto;
  text-align: left;
  font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
`;

export const BookInfo = styled.div`
  display: flex;
  margin-top: 3rem;
  padding: 0 2rem;
`;

export const BookInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0rem 1rem 3rem;
  width: 100%;
`;
export const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const BookDescriptionTitle = styled.h3`
  margin-bottom: 10px;
`;
export const BookDescriptionContent = styled.p`
  text-align: justify;
`;
export const BookComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BookCommentsTitle = styled.h4`
  margin-bottom: 10px;
`;
export const BookCommentInput = styled.input`
  background: #dfdfdf;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  min-width: 350px;
  width: 100%;
`;
export const BookCommentButton = styled.button`
  background: #189ea7;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  position: relative;
  left: 100%;
  transform: translateX(-100%);
`;
