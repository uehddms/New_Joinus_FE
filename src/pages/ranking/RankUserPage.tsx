import UserCardComponent from "@components/ranking/UserCardComponent";
import { UserHeader } from "@components/ranking/UserHeader";

const RankUserPage = () => {
  return (
    <>
      <UserHeader rank={1} />
      <UserCardComponent />
    </>
  );
};

export default RankUserPage;
