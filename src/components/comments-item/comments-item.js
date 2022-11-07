import "./comments-item.scss"
import Moss from "../../assets/images/moss.png"
import James from "../../assets/images/james.png"
import Anne from "../../assets/images/anne.png"
import Welles from "../../assets/images/welles.png"

export const CommentsItem = () => {
  return <div className="comments-item">
    <ul className="commments-item__list">
       <li className="comments-item__list-item">
         <div className="comments-item__item-header">
           <div className="comments-item__item-img-name-wrapper">
             <img src={Moss} alt="Moss" />
             <div className="comments-item__title-name-wrapper">
               <h4 className="comments-item__item-title">Elijah Moss</h4>
               <p className="comments-item__item-email">@hexagon.bestagon</p>
             </div>
           </div>
           <button className="comments-item__item-reply-button">Reply</button>
         </div>
         <p className="comments-item__item-text">Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
       </li>

       <li className="comments-item__list-item">  
         <div className="comments-item__-item-james-comment">
           <div className="comments-item__item-header">
             <div className="comments-item__item-img-name-wrapper">
               <img src={James} alt="James" />
               <div className="comments-item__title-name-wrapper">
                 <h4 className="comments-item__item-title">James Skinner</h4>
                 <p className="comments-item__item-email">@hummingbird1</p>
               </div>
             </div>
             <button className="comments-item__item-reply-button">Reply</button>
           </div>
           <p className="comments-item__item-text">Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.</p>
         </div>

         <ol className="comments-item__list-james">
           <li className="comments-item__item-james">
             <div className="comments-item__item-header">
               <div className="comments-item__item-img-name-wrapper">
                 <img src={Anne} alt="Anne" />
                 <div className="comments-item__title-name-wrapper">
                   <h4 className="comments-item__item-title">Anne Valentine </h4>
                   <p className="comments-item__item-email">@annev1990</p>
                 </div>
               </div>
               <button className="comments-item__item-reply-button">Reply</button>
             </div>
             <p className="comments-item__item-text"><span className="comments-item__item-text-span"> @hummingbird1 </span> While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
           </li>
        
           <li className="comments-item__item-james">
             <div className="comments-item__item-header">
               <div className="comments-item__item-img-name-wrapper">
                 <img src={Welles} alt="Welles" />
                 <div className="comments-item__title-name-wrapper">
                   <h4 className="comments-item__item-title">Ryan Welles</h4>
                   <p className="comments-item__item-email">@voyager.344</p>
                 </div>
               </div>
               <button className="comments-item__item-reply-button">Reply</button>
             </div>
             <p className="comments-item__item-text"> <span className="comments-item__item-text-span"> @annev1990 </span> Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.</p>
           </li>
         </ol>
       </li>
     </ul>
  </div>
}