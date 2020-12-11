import React from 'react'
import './Landing.css'

export default class LandingPage extends React.Component{
    // handleSubmit = e =>{
    //     e.preventDefault()
    //     let user = ''
    //     if(e.target['name'].value !== ''){
    //         user = e.target['name'].value
    //     }
    //     window.localStorage.setItem("name",user)
    //     // ApiService.handleUserPost(user)
    //     .then(user =>{
    //         console.log(user)
    //         this.props.history.push('/adopt')
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }

    render(){
        return(
            <div className = 'landingPage' >
            <h1>Wonderful Pet Adoptions</h1>
            <p>Are you looking for your forever friend? Do you want someone to grow old with? Wonderful Pet Adoptions through Petful has what you need.</p>
            <form className ='form' onSubmit={e => this.handleSubmit(e)}>
            <input name = "name" id="name" autoComplete = "on" type = "text" required></input>
            <label htmlFor="name" className="label-name">
                <span className="content-name">Name</span>
            </label>
            <button className="button" type ="submit">Pet Me</button>
            </form>
            </div>
        )
    }
}