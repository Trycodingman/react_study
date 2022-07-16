import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Gangnam Udong'
  let [title, setTitle] = useState(['남자 코트 추천', '강남 맛집', '역삼맛집']);

  let [likeCount, setChangeLikeCount] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false);
  let [titleTxt, setTitleTxt] = useState(1);
  let [inputValue, setInputValue] = useState(1);

  let [labelValue, setLabelValue] = useState(1);

  let [keyNumber, setKeyNumber] = useState([1,2,3,4]);
  const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: '마동석', content: '22년생'},
    {id: 2, title: '한석구', content: '33년생'}
  ];

 
  
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>My Blog</h4>
      </div>
      
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      }}>글 수정</button>

      {/* <div className="list">
        <h4>{ title[0] } <span onClick={()=>{setChangeLikeCount(likeCount+1)}}>👍</span> {likeCount} </h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{ title[2] }</h4>
        <p>2월 16일 발행</p>
      </div> */}

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitleTxt(i)}}>{ title[i] } 
                <span onClick={(e)=>{ 
                  e.stopPropagation();
                  let copy = [...likeCount];
                  copy[i] = copy[i] + 1;
                  setChangeLikeCount(copy)
                  }}>👍</span> {likeCount[i]}
              </h4>
              <p>2월 16일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <button onClick={()=>{setTitleTxt(0)}}>titleTxt0</button>
      <button onClick={()=>{setTitleTxt(1)}}>titleTxt1</button>
      <button onClick={()=>{setTitleTxt(2)}}>titleTxt2</button>
      <br/>

      <input onChange={(e)=>{ 
        setInputValue(e.target.value); 
        console.log(inputValue);
      }} />
      
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy);
        }}>저장</button>

      {
        modal === true ? <Modal color={'yellow'} title={title} onClick={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);
        }} titleTxt={titleTxt}/> : null
      }
      
      {/* <MyNumberList></MyNumberList>
      <ExampleForeach></ExampleForeach>
      <ExampleMap></ExampleMap> */}
      
      {/* <NotUseKeyListItem numbers={numbers}></NotUseKeyListItem>
      <UseKeyList posts={posts}></UseKeyList> */}

      
        <FormInputLabel placeholder="값을 입력해주세요" setLabelValue={setLabelValue} labelValue={labelValue}></FormInputLabel>

        {/* <FormInputTextArea></FormInputTextArea>
        <FormInputSelect></FormInputSelect>
        <FileInput></FileInput>
        <MultiInput></MultiInput> */}
      
      
    </div>
  );
}

function Test(){
  let [good, setGoodCount] = useState(0)
  
	return (
		<div>
			<div className="modal">
				<span onClick={()=>{setGoodCount(good+1)}}>{good}</span>
			</div>
		</div>
	);
}

function Test2(){
  const userName = 'kim';
  let desc = '';
	
	if(userName === 'kim') {
		desc = <div>kim 입니다.</div>;
	} else {
		desc = <div>not kim 입니다.</div>;
	}
	return (
		<div>
			{desc}
		</div>
	);
}


function Modal(props){
  return (
    <div className="modal" style={{ background: props.color}} >
      <h4>{props.title[props.titleTxt]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick = {props.onClick}>글수정</button>
    </div>
  )
}



// 0711 Study 리스트와 키 그리고 폼 
// function MyNumberList() {
//   const numbers = [1,2,3,4,5];
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <div className="list">
//       <ul>{listItems}</ul>
//     </div>
//   );
// }

// function ExampleForeach() {
//   let numberArray = [1, 2, 3, 4, 5];

//   let returnValue = numberArray.forEach(num => 
//     <li key={num.toString()}>
//       {num*num}
//     </li>
//   );
//   return (
//     <div className="list-numbers">
//       <ul>{numberArray}</ul>
//       <ul>{returnValue}</ul>
//     </div>
//   );
// }

// function ExampleMap() {

//   let numberArray = [1, 2, 3, 4, 5];

//   let returnValue = numberArray.map((num) =>
//       <li key={num.toString()}>
//         {num}
//       </li>
//     )
//   return (
//     <div className="list-numbers">
//       <ul>{numberArray}</ul>
//       <ul>{returnValue} </ul>
//     </div>
//   );
// }


// function NotUseKeyListItem(props) {
//   return (
//       <div className="list-numbers">
//         <ul>{props.numbers}</ul>
//         <ul>{props.value}</ul>
//       </div>
//     );
// }

// function UseKeyList(props) {
//   const posts = props.posts;
//   console.log('test', posts)
//   const listItems = posts.map((post) =>
//     <NotUseKeyListItem key={post.id} value={post.title}></NotUseKeyListItem>
//   );
//   return (
//     <div className="list-numbers">
//       {listItems}
//     </div>
//   );
// }

function FormInputLabel(props){
  const placeholder = props.placeholder;
 
  return (
    <form>
      <h1>{placeholder}</h1>
      <label>
        Name:
        <input 
          type="text" 
          placeholder={props.placeholder} 
          onChange={(e) => {
            props.setLabelValue(e.target.value);
            console.log(props.labelValue);
            }}/>
          

      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  
}



// class Profile extends React.Component {

//   constructor(){
//     super();
//   }

//   render() {
//     return(
//       <div>This is Profile</div>
//     )
//   }
// }




export default App;

