import { useState, useRef } from 'react'

import ProjectSidebar from './components/ProjectSidebar'
import HomePage from './components/Homepage'
import Expences from './components/Expences';
import SelectedExpences from './components/SelectedExpences';
import Modal from './components/Modal';


function App() {

  const [addExpence, setAddExpence] = useState({
    selectedExpenceId: undefined,
    amount: [],
  });



  function handleCancelExpence() {
    setAddExpence((prevState) => {
      return {
        ...prevState,
        selectedExpenceId: undefined
      }
    })
  }

  function handleDeleteExpence() {
    setAddExpence((prevState) => {
      return {
        ...prevState,
        selectedExpenceId: undefined,
        amount: prevState.amount.filter((amount) => amount.id !== prevState.selectedExpenceId)
      }

    })

  }

  function handleSelectedExpence(id) {
    setAddExpence((prevState) => {
      return {
        ...prevState,
        selectedExpenceId: id,
      }

    })
  }

  function handleStartAddExpence() {

    setAddExpence((prevState) => {
      console.log(addExpence.selectedExpenceId)

      return {
        ...prevState,
        selectedExpenceId: null
      }

    })
  }

  function handleAddExpences(expenceData) {
    setAddExpence((prevState) => {
      console.log("adding Expences")
      const ExpenceId = Math.random();
      const newAmount = {
        ...expenceData,
        id: ExpenceId,

      }
      return {

        ...prevState,
        selectedExpenceId: undefined,
        amount: [...prevState.amount, newAmount]
      }
    });

  }

  const SelectedExpence = addExpence.amount.find((amount) => amount.id === addExpence.selectedExpenceId);
  let content =
    <SelectedExpences
      amount={SelectedExpence}
      onDelete={handleDeleteExpence} />;

  if (addExpence.selectedExpenceId === null) {
    content = <Expences onAddNew={handleAddExpences} handleCancelExpence={handleCancelExpence} />
  } else if (addExpence.selectedExpenceId === undefined) {
    content = <HomePage onAdd={handleStartAddExpence} addExpence={addExpence} />
  }

  return (
    <main className='flex'>
      <ProjectSidebar
        onAdd={handleStartAddExpence}
        amount={addExpence.amount}
        handleSelectedExpence={handleSelectedExpence}
        SelectedExpenceId={addExpence.selectedExpenceId} />
      {content}
    </main>
  )
}

export default App
