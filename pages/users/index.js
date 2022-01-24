import { useRouter } from 'next/router'
import Link from 'next/link';

import { headers, baseUrl } from '../../misc/githubGraphQLinfo';

const UsersList = ({ users }) => {
  const router = useRouter();
  const { user } = router.query;
  return (<div>
    <p>List of found user, which included {user}</p>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
        <h3>
            <Link href={`/users/${user.login}`}>
              <a>
                {user.login}
              </a>
            </Link>
          </h3>
        </li>
      ))}
    </ul>
  </div>)
};


export async function getServerSideProps({query}) {
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
                bio
                avatarUrl
                company
              }
          }
        }
      }
        `,
      variables: {
        "user": user,
        "items" : 100
      },
    }),
  });
  const users = await res.json()

  return {
    props: {
      users: users.data.search.nodes,
    },
  }
}

export default UsersList