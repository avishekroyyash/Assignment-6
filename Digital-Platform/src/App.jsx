
import './App.css'
import Admit from './Component/Admit-fee/Admit'
import Banner from './Component/Banner/Banner'
import Navber from './Component/Navber/Navber'
import Number from './Component/Number/Number'
import Title from './Component/Number/Title'
import Steps from './Component/Steps/Steps'
import Workflow from './Component/Workflow/Workflow'

function App() {
 
  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <Number></Number>
     <Title></Title>

     <Steps></Steps>
     <Admit></Admit>
     <Workflow>c</Workflow>
    </>
  )
}

export default App
