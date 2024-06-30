import s from "./App.module.css";
import Profile from "../Profile/Profile";
import userData from "../../assets/userData.json";
import friends from "../../assets/friends.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../assets/transactions.json";

const App = () => {
  return (
    <>
      <div className={s.taskSection}>
        <h2 className={s.heading}>Task 1 Social Network Profile</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div className={s.taskSection}>
        <h2 className={s.heading}>Task 2 Friends List</h2>
        <FriendList friends={friends} />
      </div>
      <div className={s.taskSection}>
        <h2 className={s.heading}>Task 3 Transaction History</h2>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
