import { useRouter } from 'next/router';
import Link from 'next/link';

import { headers, baseUrl } from '../../misc/githubGraphQLinfo';

function User({ user }) {
  const router = useRouter();
  const { login } = router.query;
  return (
    <div>
      <p>User: #{user.id}</p>
      <h1>{user.login}</h1>
      <p>{user.location}</p>
      <div>
        <Link href="/">
          <a>Back to search</a>
        </Link>
      </div>
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
              id
              login
              avatarUrl
              bioHTML
              createdAt
              email
              location
              name
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