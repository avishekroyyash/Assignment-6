
import { Suspense } from 'react'
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

const product = fetch('Product.json').then(res => res.json())

function App() {
 
  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <Number></Number>
     <Title></Title>
     
     <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
       <ProductCart product={product}></ProductCart>
     </Suspense>
    
     <Steps></Steps>
     <Admit></Admit>
     <Workflow>c</Workflow>
     <Fotter></Fotter>
    </>
  )
}

export default App
