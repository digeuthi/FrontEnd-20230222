import NaverFind from "../../component/FindComponent";
import NaverInput from "../../component/InputComponent";
import {useRef, useState} from 'react'

const FIND_LIST = [
    {
        title: '비밀번호 찾기',
        link: 'https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=ko_KR',

    },
    {
        title: '아이디 찾기',
        link: 'https://nid.naver.com/user2/api/route?m=routeIdInquiry&lang=ko_KR',

    },
    {
        title: '회원가입',
        link: 'https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR',

    },

];

export default function Main() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const[id,setId]=useState<string>(''); //이거 위치 여기 맞니
    const [password, setPassword] = useState<string>(''); //이거 언제 추가했대
    const [isIdCheck, setIdCheck] = useState<boolean>(false);
  
    const onSubmitHandler = () => {
      if(id.trim()){
        setIdCheck(true);
        return;
      }
      setIdCheck(false);
      
      if(formRef.current) formRef.current.submit();
    }
   
    return (
    <div className="main">
      <div className="content">
        <div className="sign-in-wrapper">
        <form ref={formRef} id="form" action="https://nid.naver.com/nidlogin.login" method="POST">
          <ul className="panel-wrapper">
            <li className="panel-item">
              <div className="panel-inner">
  
                <div className="id-password-wrapper">

                    <NaverInput  label = "아이디" type="text" name = "id" maxLength={41} iconClass="icon-id" setter={setId}/>
                    <NaverInput label = "비밀번호" type="password" name = "pw" maxLength={16} iconClass="icon-pw" setter={setPassword}/>

                  
                </div>
  
                <div className="sign-in-keep-wrapper">
                  <div className="keep-check">
                    <input type="checkbox" className="input-keep" value="off" />
                    <label className="keep-text">로그인 상태 유지</label>
                  </div>
                  <div className="ip-check"></div>
                </div>
  
                {isIdCheck && (<div id="sign-in-error" className="sign-in-error">
                  <div className="error-message">
                    <strong>아이디</strong>를 입력하세요
                  </div>
                </div>)}
                
                <div className="sign-in-button-wrapper">
                  <button type="button" className="sign-in-button" onClick = {() => onSubmitHandler()}>
                    <span className="button-text">로그인</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
  
      <ul className="find-wrapper">
        {
            FIND_LIST.map((findItem) => (<NaverFind title = {findItem.title} link={findItem.link}/>))
            //요소를 하나씩 꺼내온걸 함수로 처리한 다음 반복되는 값을 뿌려주게 된다.
        }
      </ul>
  
      <div className="banner-wrapper">
        <div className="banner-content">
          <img className="banner-img" src="https://ssl.pstatic.net/melona/libs/1378/1378592/fe1b4bd9453e84b57ed7_20230407151920279.jpg" />
        </div>
      </div>
    </div>
    </div>
    );
}
