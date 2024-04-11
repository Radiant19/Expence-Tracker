import Input from "./Input";
import { useRef } from 'react'
import Modal from "./Modal";

export default function Expences({ onAddNew, handleCancelExpence }) {
    const amount = useRef();
    const description = useRef();
    const date = useRef();
    const location = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredAmount = amount.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;
        const enteredLocation = location.current.value;

        // console.log(enteredAmount,enteredDescription,enteredDate,enteredLocation);

        if (enteredDate.trim() === '' || enteredDescription.trim() === '' || enteredLocation.trim() === '' || enteredAmount.trim() === '') {

            modal.current.open();
            return;
        }

        onAddNew({
            amount: +enteredAmount,
            description: enteredDescription,
            date: enteredDate,
            location: enteredLocation
        })
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-2'>Oops ... looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'> Please make sure you provide a valid value for every input field</p>
            </Modal>
            <div className="flex flex-col w-[35rem] mt-16">
                <div>
                    <Input label="amount" type="text" ref={amount} />
                    <Input label="Description" isTextarea ref={description} />
                    <Input label="Date" type="date" ref={date} />
                    <Input label="Location" type="text" ref={location} />
                </div>
                <div className="flex item-center justify-end gap-4">
                    <button className="text-stone-800 hover:text-stone-950"
                        onClick={handleCancelExpence}>
                        Cancel
                    </button>
                    <button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                        onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </>
    )


}