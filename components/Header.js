import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Public.com</span> Sample
      </h1>
      <p className={headerStyles.description}>
        Converting exercise 2 into NextJS
      </p>
    </div>
  )
}

export default Header