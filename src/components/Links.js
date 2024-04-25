import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.githubLink}>{props.githubLink}</a>
      <a href={props.linkedinLink}>{props.linkedinLink}</a>
    </div>
  );
}

export default Links;
