import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { baseUrl, headers } from '../../misc/githubGraphQLinfo';
import { Button, CardExtended, CardHeader, CardHeaderSecondary, CardParagraph } from '../../styledComponents';


function User({ user }) {
  const router = useRouter();
  const { login } = router.query;
  let {
    bio,
    createdAt,
    url,
    name,
    login: userLogin,
    location,
    email,
    avatarUrl
  } = user;
  return (
    <div>
      <Head>
        <title>`Equiqo - Tech Check - {userLogin} details`</title>
        <meta name="description" content={`${userLogin} details`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>
        <Link href={`/`}>
          <a>back to search</a>
        </Link>
      </Button>
      <CardExtended>
        <Image src={avatarUrl}
          alt={`Picture of ${userLogin}`}
          width={260}
          height={260}
        />
        <div className='padding-left'>
          <CardHeader>{userLogin}</CardHeader>
          <CardHeaderSecondary>{name}</CardHeaderSecondary>
          <CardParagraph>location: {location}</CardParagraph>
          <CardParagraph>created at: {createdAt}</CardParagraph>
          <CardParagraph>Link to Github: <a href={url}>{url}</a></CardParagraph>
          <CardParagraph>email: {email}</CardParagraph>
          <CardParagraph>{bio}</CardParagraph>
        </div>

      </CardExtended>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const login = params.login;
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query: `
        query ($login: String!) {
            user(login: $login) {
              login
              avatarUrl
              bio
              createdAt
              email
              location
              name
              url
            }
          }
          `,
      variables: {
        "login": login
      },
    }),
  });
  const data = await res.json()

  return {
    props: {
      user: data.data.user
    },
  }
}

export default User