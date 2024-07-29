import { ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'transparent' | 'coloured'
}

const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button
      className={classNames(
        'relative z-10 overflow-hidden rounded-lg border px-4 py-3 after:absolute after:inset-0 after:-z-10 after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100',
        {
          'border-white bg-blue-700 after:bg-blue-400 hover:border-blue-700 hover:text-black':
            variant === 'transparent',
        },
        {
          'border-blue-300 bg-blue-300 text-black after:bg-blue-700 hover:border-blue-400 hover:text-white':
            variant === 'coloured',
        },
        {},
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
