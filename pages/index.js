import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Github users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Search users
        </h1>
        <form onSubmit={handleSearch}>
          <label>
            Git hub user
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">
            <Link href={`/users/?user=${encodeURIComponent(user)}`}>
              Search
            </Link>
          </button>
        </form>
      </main>
    </div>
  )
}
