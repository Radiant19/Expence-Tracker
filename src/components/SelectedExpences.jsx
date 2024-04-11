
export default function SelectedExpences({ amount, onDelete }) {
    const formattedDate = new Date(amount.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-[35rem] mt-16 px-7">
            <header className="pb-4 mb-4 border-b-2 boarder-stone-200">
                <div className="flex items-center justify-between">
                    <p className="mb-4 text-stone-900">{formattedDate}</p>
                    <h1 className="text-3xl font-bold text -stone-600 mb-2 mt-10">{amount.description}</h1>
                    <button
                        className="text-stone-600 hover:text-stone-900"
                        onClick={onDelete}>
                        Remove
                    </button>
                </div>
                <p className="text-stone-600 whitespace-pre-wrap mb-4 text-xl"> Money you spent on this item {amount.amount}</p>

                <p className="text-stone-600 text-xl whitespace-pre-wrap">Location : {amount.location}</p>
                <p className="text-stone-600 text-xl whitespace-pre-wrap mt-6"> Your Budget Left</p>
            </header>
        </div>
    )
}