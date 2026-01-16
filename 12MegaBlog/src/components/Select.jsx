import React, { useId } from 'react'

function Select(
  {
    label,
    options,
    className = "",
    ...props
  },
  ref
) {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1.5 text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        ref={ref}
        {...props}
        className={`
          w-full
          px-3 py-2
          rounded-md
          bg-white
          text-sm text-slate-800
          border border-slate-300
          focus:outline-none
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          ${className}
        `}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
