import {
  BookCommentDiv,
  BookCommentHeader,
  BookCommentAuthor,
  BookCommentDate,
  BookCommentContent,
  BallDivisor,
  BookCommentInfo,
  BookCommentAuthorImage,
} from "./styles";

const BookComment = ({ comment }) => {
  const showDate = (d) => {
    const sDate = d || new Date();
    const day = sDate.getDate();
    const month = sDate.getMonth();
    const year = sDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const { userName, content, date, userImage } = comment;

  return (
    <BookCommentDiv>
      <BookCommentAuthorImage
        src={`${userImage}?key=${process.env.REACT_APP_API_KEY}`}
      />
      <BookCommentInfo>
        <BookCommentHeader>
          <BookCommentAuthor>{userName}</BookCommentAuthor>
          <BallDivisor />
          <BookCommentDate>{showDate(date)}</BookCommentDate>
        </BookCommentHeader>
        <BookCommentContent>{content}</BookCommentContent>
      </BookCommentInfo>
    </BookCommentDiv>
  );
};

export default BookComment;
