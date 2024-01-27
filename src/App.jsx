


import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;


// Notes:

// line 30: You need a parent element for returning values (div), cause you can't return more than one value.
//  By importing Fragment, you don't need to create a extra div,
// Using modern React, you don't need a parent Element or Fragment. Instead you can use empty tags.
