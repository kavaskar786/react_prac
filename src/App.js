import Navbar from './components/navbar';
import './App.css';

function App(props) {
  return (
    //destructuring object instead of using the props.library by using the {} in the arugumets we can directly use the attribute name
    //destructuring array
   
//Use state
     // state using the use state using the array destructuing
    // use state is the one hook which will maintain the state of the particular variable and the gives us the function to also update the variables state
    


//Use effect
    // use effect is also hook builtin in react.. used manage the side effects that aren't related to the components render..things like console messages,loading data, working with animations..
    // use effect is used to run side effects when the component mounts or updates
    // the first arugument of the use effect hook will get the function and
    // the second arugument is when the effect is actually will be called if it is a emty array[] that means the effect will be called once..also called dependency array..if there is a value.. it says that use this effect when ever the dependency value is changed..
    // understand the dependancy array


//use reducer
    // like the usestate but we can able to give the function during the declaration itslef with the coustomized way
    //the first arugument is the function to change the value
    // the second arugument is the initial value

    //uncontrolled components
    // the value is not controlled by the user
    
      // useRef
          // useRef is used to get access to the dom element
          // we can use the useRef to get the dom element and then we can use the dom element
          // mainly used to get the input of the form element and to get the value from the element and to set the other value.
    // to the form submit buttion.. that will automatically makes the project to reload once the buttion is clicked
    // by using the first arugument of the submit buttion function we can use the preventdefault to prevent the default action of the form submit button
    //controlled components
      // the value is controlled by the user
      // we can use the state to control the value of the input element    

    // coustom hook
      // we can use the custom hook to create our own hooks 
      //
    <div className="App">
      <h1>{props.library}'s react</h1>
      <Navbar />
    </div>
  );
}

export default App;
