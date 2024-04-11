import { useRef, useState } from 'react'
import ExpIng from '../assets/ExpenceImg.jpeg'
import Modal from './Modal';

export default function HomePage({ onAdd, addExpence }) {
    const modal = useRef();
    let sum =0;
    let i;
    for (i = 0; i < (addExpence.amount.length); i++) {
        sum = sum + addExpence.amount[i].amount;
    }
    function handleAnalysis(addExpence) {
       
 
       
        
        modal.current.open();
        
    }
    return (
        <div className="text-center w-2/3 mt-24 ">
            <img src={ExpIng} alt="image" className='w-32 h-32 object-contain mx-auto ' />
            <h2 className='text-stone-700 font-bold text-xl'>Create a New Expence</h2>
            <button className='mt-5 bg-stone-700 hover:bg-stone-900 px-3 py-2 mb-8 rounded-lg text-sm text-stone-200'
                onClick={onAdd}> +Add Expence</button>
            <h2 className='text-stone-700 font-bold text-xl'>Calculate Expeces Till Date</h2>
            <button className='mt-5 bg-stone-700 hover:bg-stone-900 px-3 py-2 mb-8 rounded-lg text-sm text-stone-200'
                onClick={() => handleAnalysis(addExpence)} > Get analysis</button>
            <Modal ref={modal}>
            <h1 className='text-xl text-orange-500'> Your Total Expences Are {sum}</h1>
            </Modal>
        </div>
    )
}