import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friendData from './friendData.json';
import transactions from './transactionData.json';

function App() {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
