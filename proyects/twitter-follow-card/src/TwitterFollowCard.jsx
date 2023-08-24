import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({children, userName, initialIsFollowing}){
  const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  
  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }
  return(
      <div className="box">
        <article className="tw-followCard">
          <header className="tw-followCard-header">
            <img
              className="tw-followCard-avatar"
              alt = 'nombre de usuario'
              src={`https://unavatar.io/${userName}`} />
            <div className="tw-followCard-info">
              <strong> {children} </strong>
              <span className="tw-followCard-infoUserName"> @{userName} </span>
            </div>
          </header>
        </article>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            {text}
          </button>
        </aside>
      </div>
    )
}