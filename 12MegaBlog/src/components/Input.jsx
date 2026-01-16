import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="w-full">
            {label &&
                <label
                  className="block mb-1.5 text-sm font-medium text-slate-700"
                  htmlFor={id}
                >
                    {label}
                </label>
            }
            <input
              type={type}
              className={`
                w-full
                px-3 py-2
                rounded-md
                bg-white
                text-slate-800 text-sm
                border border-slate-300
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                transition-colors duration-200
                ${className}
              `}
              ref={ref}
              id={id}
              {...props}
            />
        </div>
    )
})

export default Input
