import {Dispatch, SetStateAction, useRef, useState} from 'react';
import logo from './logo.svg';
import './naver-sign-in.css';
import Header from './view/HeaderView'; //파일이 아닌 폴더로 가져옴 / 파일명을 index로 해두면 모듈의 기본값으로 지정 
import Footer from './view/FooterView';
import Main from './view/MainView';
//export default로 받은거라서 H로 바꿔서 받아도 되게 된다.

// App.tsx x가 붙으면서 xhtml이라는 뜻이 된다. 그래서 html태그를 쓸수있으나 완벽한 문법을 따라야한다. className대신 classNameName을 사용
// label에 적은 for 같은것도 하나도 안받게된다..
// tsx : typescript XML(XHTML)

//컴포넌트 , 컴포넌트로 인식하게 하려면 대문자 시작작

// interface MainProps {
//   id: string;
//   setId: Dispatch<SetStateAction<string>>;
// }


function App() {


  return ( //괄호꼭해서 html반환해준다, html의 주석을 못받는다. return에는 부모요소가 하나만 올수있다. 최상위 요소는하나만 와야해서 <></>안에 넣음
    <>
      <Header />
      
      <Main />

      <Footer />
      
    </>
  );
}

export default App;
