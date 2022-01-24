import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import { headers, baseUrl } from '../../misc/githubGraphQLinfo';
import { Title, GridContainer, Card, CardHeader, CardHeaderSecondary, Button, CardParagraph } from '../../styledComponents';

const UsersList = ({ users }) => {
  const router = useRouter();
  const { user } = router.query;
  return (users && <div>
    <Head>
      <title>`Equiqo - Tech Check - users including {user}`</title>
      <meta name="description" content="List of Github users " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>There&apos;s some users, which was found shearching for {user == '' ? "anyone" : user}</Title>
    <GridContainer>
      {users.map((user) => {
        let {
          id,
          name,
          login,
          location,
          email,
          avatarUrl
        } = user;
        return (
          <Card key={id}>
            <Image src={avatarUrl}
              alt={`Picture of ${login}`}
              width={260}
              height={260}
            />
            <CardHeader>{login}</CardHeader>
            <CardHeaderSecondary>{name}</CardHeaderSecondary>
            <CardParagraph>location: {location}</CardParagraph>
            <CardParagraph>email: {email}</CardParagraph>
            <Button filled>
              <Link href={`/users/${login}`}>
                <a>show more</a>
              </Link>
            </Button>
          </Card>
        )
      })}
    </GridContainer>
  </div>)
};


export async function getServerSideProps({ query }) {
  const user = query.user;
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: `
      query($user:String!, $items:Int!) {
        search(last:$items, query:$user, type:USER) {
          userCount,
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          },
          nodes {
              ...on User {
                id
                login
                name
                email
                location
                avatarUrl
              }
          }
        }
      }
        `,
      variables: {
        "user": user,
        "items": 100
      },
    }),
  });
  const response = await res.json()

  return {
    props: {
      users: response.data.search.nodes
    },
  }
}

export default UsersList