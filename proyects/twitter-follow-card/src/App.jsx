import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return(
    <article className='App'>
      <TwitterFollowCard userName ="midudev" initialIsFollowing={true}>
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName ="batman" initialIsFollowing={false}>
        Batman
      </TwitterFollowCard>
    </article>
  )
}