// import logo from './logo.svg';
// import './App.css';
import faker from "faker";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={"Sam"}
          date={"Today at 6:00 PM"}
          text={"Nice blog post"}
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={"Matt"}
          date={"Today at 7:00 PM"}
          text={"Nice.. thanks"}
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={"Tex"}
          date={"Today at 8:30 PM"}
          text={"Some other comment on blog"}
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
