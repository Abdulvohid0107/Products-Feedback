import "./user-comment-section.css"

export const UserCommentSection = ({children}) => {
  return <section className="user-comment-section">
    <h3 className="user-comment-section__title">4 Comments</h3>
    {children}
  </section>
}