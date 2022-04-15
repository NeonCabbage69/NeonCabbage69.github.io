import logo from './logo.svg';
import './App.css';
import Mailer from './Components/Mailer';

function App() {
    const styles = {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%'
    }

  return (
      <div className="App" style={styles}>
            <Mailer />
    </div>
  );
}

export default App;
