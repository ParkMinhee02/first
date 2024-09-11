import './App.css';
import Myprops from './Myprops';

function App() {
	const name= "minhee";
  return (

    <div className="App">
      <h1>240911 첫수업</h1>
	  <h2>{name}님 환영합니다. 내일도 똑같은 것 복습.</h2>
	  <h2>자바스크립트는 {} 안에 넣어서 사용합니다.</h2>
	  {
		name==="minhee" && <h1>민희 반가워</h1>
	  }
	  <Myprops name="박민희" childern="aaa"></Myprops>
    </div>

  );
}

export default App;
