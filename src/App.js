import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp' ;
import HelloFuncComp from './components/HelloFuncComp';
import MyLogin from './components/MyLogin';
import ArrowLogin from './components/ArrowLogin';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComp name="홍길동" adress="부산" num="1">반갑습니다 </HelloComp>
        <HelloFuncComp name="성춘향" adress="서울" num="2"></HelloFuncComp>
        {/* props는 컴포넌트를 사용할때 작성 , html요소의 속성과 동일 */ }
        <MyLogin login="true" name="이재용"></MyLogin>
        {/* JSX언어이므로 {}통해서 자바스크립트를 쓸 수 있다 */}
        <ArrowLogin login={true}  />
        <StateComp/>
        <StateFuncComp/>
        
      </header>
    </div>
  );
}

export default App;
