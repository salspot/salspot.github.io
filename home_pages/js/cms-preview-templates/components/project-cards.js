import React from "react";

const Card = ({background_color, project_icon, project_title, project_description, button_text, button_url}) =>
	<div class="col-sm-6 col-lg-4 audience-card">
		<div class="inner-content" style={{backgroundColor: background_color}}>
      <div class="card-image-wrapper">
        <img class="project-card-image" src={project_icon}/>
      </div>
      <h3 class="project-card-title">{project_title}</h3>
      <p class="project-card-description">{project_description}</p>
      <a href={button_url}
			   class="button button-large button-circle button-border button-pink project-card-button">{button_text}
      </a>
    </div>
  </div>;

//data && data.length > 0
const Cards = ({data}) =>
   <div>
    {data.map(({background_color, project_icon, project_title, project_description, button_text, button_url}) =>
      <Card background_color={background_color}
        project_icon={project_icon}
        project_title={project_title}
        project_description={project_description}
        button_text={button_text}
        button_url={button_url}/>)}
  </div>;


export default class ProjectCards extends React.Component {
  render() {
    const {data} = this.props;
    return  <div className="container body-container projects-container">
      <div className="row first-section">
		  <Cards data={data}></Cards>
      </div>

    </div>;
  }
}

