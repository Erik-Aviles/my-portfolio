import { useRouter } from 'next/router'
import React from 'react'

const CustomMobileLink = ({ title, href, className = '', toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }
  return (
    <button
      href={href}
      className={`${className} relative group text-light/75 dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  )
}

export default CustomMobileLink
