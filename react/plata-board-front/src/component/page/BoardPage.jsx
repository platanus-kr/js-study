import React, { useState, useEffect } from "react";
import axios from "axios";
import BoardTitle from "../board/BoardTitle";
import Articles from "../board/Articles";
import Pagenation from "../utils/Pagenation";
import { useLocation, useParams } from "react-router-dom";

const BoardPage = () => {
  const [boardInfo, setBoardInfo] = useState(null);
  const [articlesInfo, setArticlesInfo] = useState(null);
  const [boardPageNum, setBoardPageNum] = useState(1);
  const location = useLocation();
  const match = useParams();

  const getBoard = async (pageNum) => {
    await axios
      .get(`http://localhost:3000/api/v1/board/1`, {
        params: { page: pageNum },
      })
      .then((response) => {
        console.log(`request page: ${pageNum}`);
        console.log(response.data);

        const { boardId, boardName, articles } = response.data;
        setBoardInfo({ boardId: boardId, boardName: boardName });
        setArticlesInfo(articles);
      })
      .catch((error) => {
        console.log("실패");
        console.log(error.response);
      });
  };

  useEffect(() => {
    getBoard(boardPageNum);
  }, [boardPageNum]);

  useEffect(() => {
    console.log(match);
    console.log(location);
  }, [match, location]);

  return (
    <>
      <BoardTitle boardInfo={boardInfo} />
      <Pagenation selectedPage={boardPageNum} setPage={setBoardPageNum} />
      <Articles articlesInfo={articlesInfo} />
    </>
  );
};

export default BoardPage;