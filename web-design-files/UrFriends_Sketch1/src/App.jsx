import Button from './Button.jsx';
import Header from './Header.jsx';
import './index.css';


const userNames = [
  ["Jay", "California"],
  ["Emma", "Kentucky"],
  ["Mary Beth", "Georgia"],
  ["Chaz", "Tennessee"],
  ["Joe", "Colorado"],
  ["Steven", "China"],
  ["Jay", "California"],
  ["Emma", "Kentucky"],
  ["Mary Beth", "Georgia"],
  ["Chaz", "Tennessee"],
  ["Joe", "Colorado"],
  ["Steven", "China"],
  ["Jay", "California"],
  ["Emma", "Kentucky"],
  ["Mary Beth", "Georgia"],
  ["Chaz", "Tennessee"],
  ["Joe", "Colorado"],
  ["Steven", "China"]
]

function App() {


  const rows = [];
  for (let i = 0; i < userNames.length; i ++) {
    rows.push(<Button name={userNames[i][0]} location={userNames[i][1]}/>);
  }
  return (
  <>
  <div id="full-content">
  <Header />
  {/*This .wrapper contains the individual <Button /> elements rendered in the preceding For Statement*/}
      <div className="wrapper">
        <div className="container">{rows}</div>
      </div>
    </div>
  </>
  );  
}

export default App
