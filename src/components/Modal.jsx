import { useImperativeHandle, useRef, forwardRef } from 'react';
const Modal = forwardRef(function Modal({ children , ...props}, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    return (
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md' {...props}>
            {children}
            <form method='dialog' className="mt-4 text-right">
                <button
                    className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                >
                    Close</button>
            </form>
        </dialog>
    );
});
export default Modal;