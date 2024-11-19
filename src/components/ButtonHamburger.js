import React from 'react'

const ButtonHamburger = ({ changeNavbar, navbar }) => {
  return (
    <button
      className='flex-col justify-center items-center hidden lg:flex'
      onClick={changeNavbar}
    >
      <span
        className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          navbar ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`}
      />
      <span
        className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          navbar ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          navbar ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`}
      />
    </button>
  )
}

export default ButtonHamburger
