import React from 'react';

const BoardTitle = ({ boardInfo }) => {
  if (!boardInfo || boardInfo === {}) return <h1>Title is Loading...</h1>;
  return (
    <header>
      <h1>
        NO.{boardInfo.boardId} {boardInfo.boardName}
      </h1>
    </header>
  );
};

export default BoardTitle;