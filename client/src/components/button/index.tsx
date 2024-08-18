import { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'transparent' | 'coloured'
}

const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button
      className={classNames(
        'relative z-10 overflow-hidden rounded-lg px-4 py-3 duration-300 after:absolute after:inset-0 after:-z-10 after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100',
        {
          'border border-white after:bg-primary-300': variant === 'transparent',
        },
        {
          'bg-primary-500 text-black after:bg-primary-200 hover:text-white': variant === 'coloured',
        },
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
