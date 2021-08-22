import Nav from './Nav.js'
import styles from '../styles/Layout.module.css'
import Header from './Header.js'
import Meta from './Meta.js'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout