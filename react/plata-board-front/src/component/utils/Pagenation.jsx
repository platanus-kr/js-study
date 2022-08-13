import React from "react";

const PageButton = ({ pageNum, isSelected, setPage }) => {
  const changePage = () => {
    if (setPage) setPage(pageNum);
  };
  return (
    <button
      style={{ color: isSelected ? "red" : "black" }}
      onClick={changePage}
    >
      {pageNum}
    </button>
  );
};

const Pagenation = ({ selectedPage, setPage }) => {
  const pageRange = [];
  for (let i = 1; i <= 5; i++) {
    pageRange.push(i);
  }
  return (
    <footer>
      {pageRange.map((pageNum) => (
        <PageButton
          key={pageNum}
          pageNum={pageNum}
          setPage={setPage}
          isSelected={pageNum === selectedPage}
        />
      ))}
    </footer>
  );
};

export default Pagenation;