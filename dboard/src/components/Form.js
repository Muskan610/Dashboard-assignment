import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:''
        }
    }
    onChange=(e)=>this.setState({[e.target.name]: e.target.value })
   
    handleSubmit=(event)=>{
alert(`${this.state.username} ${this.state.comments}`)
event.preventDefault() //to cancel default behaviour of the alert so that the page is not refreshed and values are not lost
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <div >
                    <label>
                        Username
                    </label>
                    <input type='text' 
                    name='username'
                    value={this.state.username} 
                   
                   onChange={this.onChange} >
                    </input>
                </div> 
                <div>
                    <label>Comments</label>
                    <textarea name='comments' value={this.state.comments}
                   onChange={this.onChange}  
                    ></textarea>
                </div>
                <button type='submit'> Submit</button>
            </form>
        )
    }
}

export default Form
