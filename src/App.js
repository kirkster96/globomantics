import Banner from "./components/banner";
import Trouble from "./components/trouble";

const App = () => {
  const jsx = <div>hi there. render this JSX anywhere by using an expression</div>;

  return (
    <div>
      {jsx}
      <Banner headerText="here is something nice"/>
      <Trouble>something else?? ( this demonstrates children )</Trouble>
      <Trouble>is there something else?? (children is all markup present between the start and end tag)</Trouble> 
      <Trouble><div>Why not have a div in 'children'. it can be more complex if you like.</div> </Trouble> 
      <Banner headerText="here is something else nice"/>
    </div>
    );
 }

export default App;