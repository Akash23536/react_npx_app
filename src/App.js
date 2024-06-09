import React, {Component} from "react";
import DefaultExport from "./components/DefaultExport";
import { NamedExport} from "./components/NamedExport";


function FunctionBasedComponent () {
  return <h1> hello I am Function Based Component </h1>
}

class ClassBasedComponent extends Component  {
  render() {
    return <h1>hello I am Class Based Component</h1>;
  }
}


function App() {
  return ( 
  <>
  <h1> Hello Akash</h1>
  <FunctionBasedComponent />
  <ClassBasedComponent />
  <NamedExport />
  <DefaultExport/>
  </>
  );
}

export default App;




