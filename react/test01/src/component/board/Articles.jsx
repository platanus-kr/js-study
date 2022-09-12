import React from 'react';

const Article = ({ content }) => {
  return (
    <article>
      <br />
      <div>[제목] {content.title}</div>
      <div>[작성자] {content.authorNickname}</div>
      <div>[작성일시] {content.createdDate}</div>
    </article>
  );
};

const Articles = ({ articlesInfo }) => {
  if (!articlesInfo || articlesInfo === {})
    return <h1>Articles is Loading...</h1>;

  const articlesContent = articlesInfo.content;
  return (
    <section>
      {articlesContent.map((content) => (
        <Article key={content.id} content={content} />
      ))}
    </section>
  );
};

export default Articles;