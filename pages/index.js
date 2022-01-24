import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Title, Main, Button, Input } from '../styledComponents';

export default function Home() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Head>
        <title>Equiqo - Tech Check - Home</title>
        <meta name="description" content="Find me some Github users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Find me some Github users
        </Title>
        <form onSubmit={handleSearch}>
          <Input type="text" name="name" onChange={handleChange} placeholder="type a name" />
          <Button type="submit">
            <Link href={`/users/?user=${encodeURIComponent(user)}`}>
              Search
            </Link>
          </Button>
        </form>
      </Main>
    </div>
  )
}
