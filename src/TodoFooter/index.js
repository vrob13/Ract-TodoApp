import React from "react"
import './TodoFooter.css';
import { SiLinkedin, SiGithub } from "react-icons/si";

const TodoFooter = () => {
    return (
        <div className="Footer">
            <a href="https://linkedin.com/in/robinson-vegas-malave-31779b156" target="__blank"><SiLinkedin
                className="Footer-icon"
            /><span>Robinson vegas</span></a>
            <a href="https://github.com/vrob13" target="__blank"><SiGithub
                className="Footer-icon"
            /><span>@robinsonvegas • All rights reserved ©</span></a>
        </div>
    );
}
 
export { TodoFooter };