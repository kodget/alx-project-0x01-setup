import Header from "@/components/common/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="mt-14">
        <div>
          <h1>This is the users index</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
          {posts?.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
export default Users;
