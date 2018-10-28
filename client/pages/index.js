import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    Hello, world.{" "}
    <ul>
      {props.makers.map(maker => (
        <li>
          <h3>{maker.name}</h3>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch(`http://localhost:5000/api/makers/all`);
  const data = await res.json();

  console.log(`Makers data fetched. Count: ${data.length}`);

  return {
    makers: data
  };
};

export default Index;
