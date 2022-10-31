import "./types.css"

export const Types = ({children}) => {
  return <ul className="types__list">
    <li className="types__item">All</li>
    <li className="types__item">UI</li>
    <li className="types__item">UX</li>
    <li className="types__item">Enhancement</li>
    <li className="types__item">Bug</li>
    <li className="types__item">Feature</li>
    {children}
  </ul>
}