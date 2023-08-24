import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return(
    <article className='App'>
      <TwitterFollowCard userName ="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName ="batman">
        Batman
      </TwitterFollowCard>
    </article>
  )
}