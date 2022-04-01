import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BookDiv,
  BookImage,
  BookInfo,
  BookTitle,
  BookInfoDiv,
  BookDescription,
  BookDescriptionTitle,
  BookDescriptionContent,
  BookComments,
  BookCommentsTitle,
  BookCommentInput,
  BookCommentButton,
} from "./style";
import api from "../../services/api";
import { Header, Title } from "../../components/HeaderComponent/style";
import BooksCommentsList from "../../components/Book/BookCommentsList";
import { AuthContext } from "../../contexts/Auth";
import {
  GoBackButton,
  GoBackButtonIcon,
} from "../../components/SearchComponent/style";

export default function Book() {
  const defaultBook = {
    volumeInfo: {
      id: "",
      title: "",
      imageLinks: null,
      description: "",
    },
  };

  const { client } = useContext(AuthContext);
  const { profileObj } = client;
  const { googleId, name, imageUrl } = profileObj;

  const [book, setBook] = useState(defaultBook);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const appParams = useParams();
  const { id } = appParams;

  const handleSubmit = async () => {
    await api
      .get(`/books/${id}`, {
        params: {
          key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.error(err));
  };

  const { imageLinks, title, description } = book.volumeInfo;

  const getComments = async () => {
    await api.get(`/comments/book/${id}`).then((response) => {
      setComments(response.data.comments);
    });
  };

  const postComment = async () => {
    if (comment.trim()) {
      console.log("postado");
      await api
        .post("/comments", {
          userId: googleId,
          userName: name,
          userImage: imageUrl,
          bookId: id,
          content: comment,
        })
        .then(() => {
          getComments();
          setComment("");
        });
    }
  };

  useEffect(() => {
    handleSubmit();
    getComments();
  }, []);

  return (
    <main>
      <BookDiv>
        <Header style={{ justifyContent: "unset" }}>
          <GoBackButton to="/">
            <GoBackButtonIcon className="bi bi-arrow-left" />
          </GoBackButton>
          <Title>Search Books</Title>
        </Header>
        <BookInfo>
          {imageLinks && <BookImage src={imageLinks.thumbnail} alt={title} />}
          <BookInfoDiv>
            <BookTitle>{title}</BookTitle>
            <BookDescription>
              <BookDescriptionTitle>Sinopse</BookDescriptionTitle>
              <BookDescriptionContent>{description}</BookDescriptionContent>
            </BookDescription>
            <BookComments>
              <BookCommentsTitle>Comentários</BookCommentsTitle>
              <BookCommentInput
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    postComment();
                  }
                }}
              />
              <BookCommentButton onClick={() => postComment()}>
                Comentar
              </BookCommentButton>
              {comments.length > 0 && <BooksCommentsList comments={comments} />}
            </BookComments>
          </BookInfoDiv>
        </BookInfo>
      </BookDiv>
    </main>
  );
}
