import React, { useState, useEffect } from 'react';
import axios from "axios";

// 파라미터를 보내는 첫번째 방법
const getArticles = async () => {
  await axios
    .get(`http://localhost:3000/api/v1/board/1`, { params: { page: 2 } })
    .then((response) => {
      console.log("성공");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("실패");
      console.log(error.response);
    });
};

// App.js

// 첫번째 방법
const MyButton = ( props ) => {
	const clickEvent = () => {
	  console.log(props.clickMessage);
	};
	return <button onClick={clickEvent}>{props.buttonName}</button>;
  };

// App.js

const MyButton2 = () => {
	let countButton2 = 0;
	const clickEvent = () => {
	  countButton2 = countButton2 + 1;
	  console.log(`countButton2: ${countButton2}`);
	};
	return <button onClick={clickEvent}>countButton2: {countButton2}</button>;
  };
  
  const MyButton3 = () => {
	const [countButton3, setcountButton3] = useState(0);
	useEffect(() => {
		console.log(`countButton3: ${countButton3}`);
	  }, [countButton3]);
	const clickEvent = () => {
	  setcountButton3(countButton3 + 1);
	  // console.log(`countButton3: ${countButton3}`);
	};
	return <button onClick={clickEvent}>countButton3: {countButton3}</button>;
  };


  const JsonBoard = () => {
	const [boardInfo, setBoardInfo] = useState(null);
	const [articlesInfo, setArticlesInfo] = useState(null);
  
	const getBoard = async () => {
	  await axios
		.get(`http://localhost:3000/api/v1/board/1`, { params: { page: 2 } })
		.then((response) => {
		  console.log("성공");
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
	  getBoard();
	}, []);
  
	return (
	  <>
			<div>{JSON.stringify(boardInfo)}</div>
			<br />
			<div>{JSON.stringify(articlesInfo?.content)}</div>
	  </>
	);
  };


  function App() {
	//getArticles();
	return (
	  <>
		<h1>Hello World</h1>
		<MyButton buttonName={"ONE"} clickMessage={"HELLO"} />
		<MyButton buttonName={"two"} clickMessage={"hi"} />
		<MyButton2 buttonName={"two"} clickMessage={"hi"} />
		<MyButton3 buttonName={"two"} clickMessage={"hi"} />
		<JsonBoard />
	  </>
	);
  }
  
  export default App;
