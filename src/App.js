import logo from './images/logo.svg';
import './styles/App.css';
import { subhadeep, renderName } from './components/person';
import defaultSubhadeep from './components/defaultPerson';
import AddContact from './components/AddContact';
import MyForm from './components/Form';
import MultiFieldForm from './components/MultiFieldForm';

function Car(props) {

  return <h1>my car is {props.name}</h1>
}

const arrowFunction = name => "Hello " + name + " Arrow Function"

const arrowFunctionJSX = name => <h2>Hello {name} JSX Arrow Fucntion</h2>
const myNameArray = ["Ahbi", "Subh", "Anil"]
//Array method
const myArrayLi = myNameArray.map(item => <li>{item}</li>)
//Deconstructions
const [decmyNameArray, decmyArrayLi] = [myNameArray, myArrayLi]

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

const { type, color, brand, model, registration: { state } } = vehicleOne

// Spread

const array = [1, 2, 3]
const array2 = [4, 5, 6]

const combile = [...array, ...array2]

const truck = {
  name: "mytruckname",
  yom: 2024
}

const car = {
  carname: "mycarname",
  caryom: 2024
}

const combineVehicle = { ...truck, ...car }
const param = "size";
const config = { ...truck, [param]: 12 };

const cars = ["Audi", "BMW", "Aston Martin"]

const carcomponents = cars.map((carname) => <Car name={carname} />)

function App() {

  return (
    <div className="App">
      <MultiFieldForm />
      {
      /*  
      <h1> {config.size} {config.yom}  {config.name}</h1>
      <h1> Component Add Contact Render <AddContact name="Subh" fontstyle="I"/></h1>
      {carcomponents}
      <h1>{arrowFunction("myarrow")}</h1>
      <h1>{arrowFunctionJSX("myarrow")}</h1>
      <h1>{type} and {state}</h1>
      <h1>{carname} and {yom}</h1>
      
      <h1>Default Subhadeep  is {defaultSubhadeep.name}</h1>
      { renderName() }
      <ul>
        {myArrayLi}
      </ul> 
    */
  }
    </div>
  );
}

export default App;
