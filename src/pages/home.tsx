import NavBar from "../components/layout/NavBar/navbar";
import PropertLists from "../components/layout/PropertyLists/propertyLists";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <NavBar />
      <PropertLists />
    </div>
  );
};

export default Home;
