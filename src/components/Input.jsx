import { forwardRef } from 'react'

 const Input = forwardRef(function Input({label , type,isTextarea, ...props},ref){
    const classes =
        'w-full text-md p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
    
    return(
        <p className="flex flex-col gap-1 my-4 mt-8 ml-10">
        <label className="text-sm uppercase  font-bold text-stone-500  ">
            {label}
            </label>
            {isTextarea  ? 
            <textarea className={classes} ref={ref}/> : 
            <input className={classes} 
            type={type} {...props}  ref={ref}/> }
            
           
            </p>
    )
})
export default Input;