import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    Hello, world.
    <ul>
      {props.makers.map(maker => (
        <li>
          <h3>
            {maker.name}{" "}
            <Link href={{ pathname: `https://twitter.com/${maker.twitter}` }}>
              <a target="_blank">@{maker.twitter}</a>
            </Link>
          </h3>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/makers/all`);
  const data = await res.json();

  return {
    makers: data
  };
};

export default Index;
