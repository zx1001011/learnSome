import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
function App() {
  return (
    <div>
      <BrowserRouter basename="/react">
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Link to="/">首页</Link> |
        <Link to="/about">关于页面</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
