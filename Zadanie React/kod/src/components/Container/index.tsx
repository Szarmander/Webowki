import './container.scss'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

export default function Container({children}: ContainerProps) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}