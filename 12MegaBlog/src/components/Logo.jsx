import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div
      className="
        font-semibold
        text-lg
        tracking-tight
        text-slate-800
        select-none
      "
      style={{ width }}
    >
      Logo
    </div>
  )
}

export default Logo
