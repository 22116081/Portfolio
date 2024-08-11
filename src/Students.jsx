import PropTypes from "prop-types"
import profilepic from './assets/profile.jpg'

function Student(props) {

    return( 
        <>
        <a href ="#">
        <div className="Student">
            <img src={profilepic} className="cardimage"></img>
            <p>Degree: {props.name}</p>
            <p>Field of study: {props.age}</p>
            <p>Finished: {props.isStudent ? "Yes" : "No"}</p>

        </div>
        </a>
<a href ="#">
         <div className="Student">
         <img src={profilepic} className="cardimage"></img>
            <p>Degree: {props.degree}</p>
            <p>Field of study: {props.fieldofstudy}</p>
            <p>Finished: {props.finished ? "Yes" : "No"}</p>

        </div>
        </a>

        <a href ="#">
         <div className="Student">
         <img src={profilepic} className="cardimage"></img>
            <p>Degree: {props.degree1}</p>
            <p>Field of study: {props.fieldofstudy1}</p>
            <p>Finished: {props.finished1 ? "Yes" : "No"}</p>

        </div>
        </a>
        <a href ="#">
         <div className="Student">
         <img src={profilepic} className="cardimage"></img>
            <p>Degree: {props.degree2}</p>
            <p>Field of study: {props.fieldofstudy2}</p>
            <p>Finished: {props.finished2 ? "Yes" : "No"}</p>

        </div>
        </a>


        <a href ="#">
         <div className="Student">
         <img src={profilepic} className="cardimage"></img>
            <p>Degree: {props.degree3}</p>
            <p>Field of study: {props.fieldofstudy3}</p>
            <p>Finished: {props.finished3 ? "Yes" : "No"}</p>

        </div>
        </a>

        </>
    )
}
    
Student.propTypes ={
    name: PropTypes.string,
    age:PropTypes.string,
    isStudent:PropTypes.bool,




}

    Student.defaultProps = {
        name: "Guest",
        age: "N/A",
        isStudent: false,
    }



export default Student