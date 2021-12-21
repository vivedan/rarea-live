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
    }


    handleChange(e){
        
        let val = e.target.value;
        this.setState({comment: val});
        //console.log(val);
    }


    componentDidMount() {
        this._isMounted = true;
        this.setState();
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
                    <label htmlFor="comment">We would love to hear from you:</label>
                    <br></br>
                    <textarea id="comment" type="text" rows="4" cols="50" maxLength="140" name="Comment" placeholder="Comment" onChange={this.handleChange} value={this.state.comment}></textarea>
                    <br></br>
                    <button>Hang your comment on the tree!</button>
                </form>
                
            </div>
         );
    }
}
 
export default InputComment;