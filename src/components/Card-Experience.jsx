import React from "react";
import './card-experience.css';

export default function CardExperience({role, company, duration, description}){
  return(
    <article className="card-experience bg-black border-blue-500">
      <div className="cnt-card">
        <h3 className="role">
          {role}
          {
            company
              ? (<smal className="name-company">{company}</smal>) 
              : ''
          }
        </h3>
        <span className="duration">{duration}</span>
        <p className="role-description">{description}</p>
      </div>
    </article>
  )
}