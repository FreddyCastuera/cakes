import logo from './logo.svg';
import './App.css';
import {Select} from './Components/Select'
import { Nav } from './Components/Nav';
import { CardContanier } from './Components/CardContanier';
import {Filters} from './Components/Filters'
import {Search} from './Components/Search'
import data from './AxoviaData.json'
import {useState,useEffect} from 'react'
import {useField} from './hooks/useField'
import {FaSearch,FaRulerCombined,FaDollarSign} from "react-icons/fa"
import { RiArrowUpDownFill } from "react-icons/ri";
import {GiCupcake} from 'react-icons/gi'




function App() {
  const toppings = {
    "Fondeau":"0",
    "Betun Italiano":"1",
    "Chantilly":"2"
  }
  const sizes = {
    "Pequeño":"S",
    "Mediano":"M",
    "Grande":"L"
  }
  function filterBySearch(arr,search){
    return search===''?arr:arr.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }

  function filterByPrice(arr,price){
    switch(price){
      case 'Hasta $299':
        return arr.filter(item=>Number(item.price)<=299)
      case '$300 a $399':
        return arr.filter(item=>Number(item.price)>=300 && Number(item.price)<=399)
      case 'De $400 en adelante':
        return arr.filter(item=>Number(item.price)>=400)
      default:
        return arr
    }
  }

  function filterByPriceCombo(arr,price){
    switch(price){
      case 'Hasta $499':
        return arr.filter(item=>Number(item.price)<=499)
      case '$500 a $999':
        return arr.filter(item=>Number(item.price)>=300 && Number(item.price)<=399)
      case 'De $1000 en adelante':
        return arr.filter(item=>Number(item.price)>=400)
      default:
        return arr
    }
  }


  function filterByTopping(arr,topping){
    switch(topping){
      case 'Fondeau':
        return arr.filter(item=>item.toppingType==="0")
      case 'Betun Italiano':
        return arr.filter(item=>item.toppingType==="1")
      case 'Chantilly':
        return arr.filter(item=>item.toppingType==="2")
      default:
        return arr
    }
  }
function filterBySize(arr,size){
  switch(size){
    case 'Pequeño':
      return arr.filter(item=>item.size==="S")
    case 'Mediano':
      return arr.filter(item=>item.size==="M")
    case 'Grande':
      return arr.filter(item=>item.size==="L")
    default:
      return arr
  }
}
function orderByPrice(arr,order){
  if(order==='Mas caro') return [...arr].sort((a,b)=>Number(b.comboPrice)-Number(a.comboPrice))
  if(order==='Mas barato') return [...arr].sort((a,b)=>Number(a.comboPrice)-Number(b.comboPrice))
  return arr
}

// const [search,setSearch] = useState('')
// const [topping,setTopping] = useState('Todos')
// const [size,setSize] = useState('Todos')
// const [order,setOrder] = useState('Mas barato')
// const handleChangeSearch = (event) =>{
//   setSearch(event.target.value)
// }
// const handleChangeTopping = (event)=> {
//   setTopping(event.target.value)
// }
// const handleChangeSize = (event)=> {
//   setSize(event.target.value)
// }
// const handleChangeOrder = (event)=> {
//   setOrder(event.target.value)
// }
//movimos toda la logica de control de inputs a un hook personalizado
const search = useField('')
const price = useField('Hasta $299')
const priceCombo = useField('Hasta $499')
const topping = useField('Todos')
const size = useField('Todos')
const order = useField('Mas barato')

const [filteredCakes,setFilteredCakes] = useState(data)

useEffect(()=>{
  const filteredBySearch = filterBySearch(data,search.value)
  const filteredByPrice = filterByPrice(filteredBySearch,price.value)
  const filteredByPriceCombo = filterByPriceCombo(filteredByPrice,priceCombo.value)
  const filteredByTopping = filterByTopping(filteredByPriceCombo,topping.value)
  const filteredBySize = filterBySize(filteredByTopping,size.value)
  const OrderedByPrice = orderByPrice(filteredBySize,order.value) 
  setFilteredCakes(OrderedByPrice)
},[search.value,price.value,priceCombo.value,topping.value,size.value,order.value])


  
  
  return (
    <div className="App">

      <Nav />
      <Filters >
        <Search 
          {...search}
        />
        <Select 
          title='Precio' 
          options={['Hasta $299','$300 a $399','De $400 en adelante','Todos']} 
          {...price}
          element={FaDollarSign}
          />
        <Select 
          title='Precio Combo' 
          options={['Hasta $499','$500 a $999','De $1000 en adelante','Todos']} 
          {...priceCombo}
          element={FaDollarSign}
          />
        <Select 
          title='Topping' 
          name='topping'
          {...topping}
          options={['Fondeau','Betun Italiano','Chantilly','Todos']} 
          element={GiCupcake}
          />
        <Select 
          title='Tamaño' 
          name='size'
          {...size}
          options={['Pequeño','Mediano','Grande','Todos']} 
          element={FaRulerCombined}
          />
        <Select 
          title='Precio' 
          name='order'
          {...order}
          options={['Mas caro','Mas barato']} 
          element={RiArrowUpDownFill}
          />
      </Filters>
      <CardContanier cakes={filteredCakes}/>
      
    </div>
  );
}

export default App;
