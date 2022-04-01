import styled from "styled-components";

export const BookCommentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  width: max-content;
  margin-bottom: 20px;
`;
export const BookCommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;
export const BookCommentAuthor = styled.p`
  font-weight: bold;
`;
export const BallDivisor = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0 10px;
  background: gray;
`;
export const BookCommentDate = styled.p`
  color: gray;
`;
export const BookCommentContent = styled.p``;
export const BookCommentAuthorImage = styled.img`
  width: 50px;
  margin-right: 10px;
`;
export const BookCommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
