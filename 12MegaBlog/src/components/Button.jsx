import React from 'react'

function Button({
    children,
    type = 'button',
    bgColour = 'bg-blue-600',
    textColour = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        px-4 py-2
        rounded-md
        text-sm font-medium
        ${bgColour} ${textColour}
        transition-colors duration-200
        hover:brightness-95
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
        {children}
    </button>
  )
}

export default Button
