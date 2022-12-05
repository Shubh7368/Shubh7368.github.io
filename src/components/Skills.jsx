import React from 'react';
import './portfolio.css'
import Swing from 'react-reveal/Swing';

const Skills = () => {
  return (
    <>
       <div id="skills">
       <h1 className="text text-center h1 m-5"> <u>SKILLS</u></h1>
       <Swing >
       <div className="box">
         <div>
         <img src="html.png" style={{width:"100%"}} className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="css.png" style={{width:"100%"}} className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="js.jpg" style={{width:"100%"}} className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="react.png" style={{width:"100%"}} className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="redux.png" style={{width:"100%"}} className="img-fluid" alt="Responsive"/>
         </div>
        
         <div>
         <img src="node.png" style={{width:"100%"}} className="img-fluid" alt="Responsive image"/>
         </div>

         <div>
         <img src="next.png.jpeg" style={{width:"100%"}} className="img-fluid" alt="Responsive image"/>
         </div>
        
         
       </div>
       </Swing>
       </div>
    </>
  );
}

export default Skills;
