import BookComment from "../BookComment";
import { BooksCommentsListDiv } from "./styles";

const BooksCommentsList = ({ comments }) => {
  return (
    <BooksCommentsListDiv>
      {comments.map((comment) => (
        <BookComment key={comment.id} comment={comment} />
      ))}
    </BooksCommentsListDiv>
  );
};

export default BooksCommentsList;
