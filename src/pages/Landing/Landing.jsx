import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h2>This is where I'll display recently submitted photos for all to view</h2>
    </main>
  )
}

export default Landing
