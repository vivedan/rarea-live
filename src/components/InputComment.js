import React, { Component } from 'react';
//import storage from '../firebase';
import firebase from '../firebase';


class InputComment extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            comment: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.processLanguage = this.processLanguage.bind(this);
    }

    /* processLanguage(){
        //console.log(this.props.language);
        const language = this.props.language;
        if(language === "es"){
            console.log("Hola!");
        }else{
            console.log("Hello!");
        }
    } */


    handleChange(e){
        
        let val = e.target.value;
        this.setState({comment: val});
        //console.log(val);
    }


    componentDidMount() {
        this._isMounted = true;
        this.setState();
        //this.processLanguage();
    }


    handleSubmit(e){
        e.preventDefault();
        const comment = this.state.comment;
        //console.log(comment);
        const dbref = firebase.database().ref('tree-comments');
        dbref.push(comment);
        
        //dbref.child(Math.random()*10).set(comment).then().catch();
        this.setState({comment: " "});
        //this.props.toggleForm();
        this.props.setSlide(" ")
    }


    /* componentDidUpdate(){
        console.log(this.state);
    }; */

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() { 
        return ( 
            <div className="comment-input-wrapper centered">
                <form onSubmit={this.handleSubmit}>
                    {this.props.language === "es" && <label htmlFor="comment">Nos encantaría oír de ti:</label>}
                    {this.props.language !== "es" && <label htmlFor="comment">We would love to hear from you:</label>}
                    <br></br>
                    <textarea id="comment" type="text" rows="4" cols="50" maxLength="140" name="Comment" placeholder="" onChange={this.handleChange} value={this.state.comment}></textarea>
                    <br></br>
                    {this.props.language === "es" && <button>¡Cuelga tu comentario en el árbol!</button>}
                    {this.props.language !== "es" && <button>Hang your comment on the tree!</button>}
                </form>
                
            </div>
         );
    }
}
 
export default InputComment;