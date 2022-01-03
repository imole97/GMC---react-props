// import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import MyPicture from './profile.jpg'

function App() {
  
  const handleName = (user) => {
    alert(`This profile user is ${user}`)
  }

  return (
    <div className="App">
      <img width='300' height='300' src={MyPicture} alt='myphoto'></img>
      <Profile fullname='Imoleayo' bio='I love food and JavaScript' profession='JavaScript Full-Stack Developer' handleName={handleName}/>
      
    </div>
  );
}

export default App;
