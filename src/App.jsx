const Card = ({title , description}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card title="Card Title" description="This is a description of the card." />
      <Card title="Card Title" description="This is a description of the card." />
      <Card title="Card Title" description="This is a description of the card." />
    </div>
  );
};

export default App;
