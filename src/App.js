// import logo from './logo.svg';
// import './App.css';
import faker from "faker";
import CommentDetail from "./components/CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        name={"Sam"}
        date={"Today at 6:00 PM"}
        text={"Nice blog post"}
      />
      <CommentDetail
        name={"Matt"}
        date={"Today at 7:00 PM"}
        text={"Nice.. thanks"}
      />
      <CommentDetail
        name={"Tex"}
        date={"Today at 8:30 PM"}
        text={"Post on blog"}
      />
    </div>
  );
}

export default App;
