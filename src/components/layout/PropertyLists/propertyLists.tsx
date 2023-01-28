import PropertyItem from "../PropertyItem/propertyItem";

interface ProductListProps {}

const PropertLists: React.FunctionComponent<ProductListProps> = () => {
  return (
    <div>
      {/* <h1>this will render all the house list</h1> */}
      <PropertyItem />
    </div>
  );
};

export default PropertLists;
