import withAuth from "../../components/withAuth";
import Counter from "../../components/Counter/Counter";

function Main({ name }) {
  const someString = "random string";

  return (
    <div>
      <h1>Main Page</h1>
      <h1>{name}</h1>
      <Counter
        stuff={<p>stuff</p>}
        render={(value) => {
          return (
            <h1>
              {someString}
              {value}
            </h1>
          );
        }}
      />
      <Counter
        render={(value) => {
          return <p>{value}</p>;
        }}
      />
    </div>
  );
}

const MainWithAuth = withAuth(Main);

export default MainWithAuth;
