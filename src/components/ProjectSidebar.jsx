import expImg from '../assets/ExpenceImg.jpeg'
import SelectedExpences from './SelectedExpences';

export default function ProjectSidebar({
    onAdd,
    amount,
    handleSelectedExpence,
    SelectedExpenceId
}) {
    return (

        <aside className='bg-stone-900 px-5 py-10 w-1/3 rounded-md md:w-72 text-stone-50 rounded-r-wl h-screen mt-7' >

            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 '>
                Expence Tracker</h2>
            <div>
                <button className='bg-stone-800 hover:bg-stone-700 px-3 py-2 mb-8 rounded-lg text-sm text-stone-400'
                    onClick={onAdd}>
                    +Add Expences
                </button>
            </div>
            <ul className='mt-5  mb-6'>
                {amount.map((amount) => {
                    let cssClasses = "w-full text-left px-2 py-1 my-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800"

                    if (amount.id === SelectedExpenceId) {
                        cssClasses += ' bg-stone-800 text-stone-200'
                    } else {
                        cssClasses += ' text-stone-400'
                    }
                    return (
                        <li key={amount.id}>
                            <button className={cssClasses}
                                onClick={() => handleSelectedExpence(amount.id)}>
                                {amount.description}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>

    );
}