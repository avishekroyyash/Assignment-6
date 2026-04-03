
import { Suspense, useState } from 'react'
import './App.css'
import Admit from './Component/Admit-fee/Admit'
import Banner from './Component/Banner/Banner'
import Fotter from './Component/Fotter/Fotter'
import Navber from './Component/Navber/Navber'
import Number from './Component/Number/Number'
import Title from './Component/Number/Title'
import ProductCart from './Component/ProductCart/ProductCart'
import Steps from './Component/Steps/Steps'
import Workflow from './Component/Workflow/Workflow'
import AddCard from './Component/AddCard/AddCard'

const product = fetch('Product.json').then(res => res.json())

function App() {
  const [cardData,setcardData]= useState([])
  //console.log(cardData,'cardData')
 const [activeTab,setActiveTab] = useState('product');
const handleProduct = ()=>{
setActiveTab('product')
}
const handleCard =()=>{
setActiveTab('card')
}
  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <Number></Number>
     <Title></Title>
    
<div className="tabs flex justify-center items-center tabs-box gap-2 bg-transparent">
  <input onClick={handleProduct}
   type="radio" name="my_tabs_1" className={`tab ${activeTab == 'product' && 'bg-indigo-700 text-white' } text-black rounded-2xl `} aria-label="Products" defaultChecked/>
  <input onClick={handleCard}
   type="radio" name="my_tabs_1" className={`tab ${activeTab == 'card' && 'bg-indigo-700 text-white'} text-black rounded-2xl `} aria-label={`Cart (${cardData.length})`} />
 
</div>
 { activeTab == 'product' ?  <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
       <ProductCart product={product} cardData={cardData} setcardData={setcardData}></ProductCart>
     </Suspense> : <AddCard cardData={cardData} setcardData={setcardData} ></AddCard> }
    
    
     <Steps></Steps>
     <Admit></Admit>
     <Workflow>c</Workflow>
     <Fotter></Fotter>
    </>
  )
}

export default App
