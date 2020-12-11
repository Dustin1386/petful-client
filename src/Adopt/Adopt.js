import React from 'react';
// import { Link } from 'react-router-dom';
import config from '../../config';
import Cats from '../../components/Cats/Cats';
import Dogs from '../../components/Dogs/Dogs';
import Users from '../../components/Users/Users';
import ApiService from '../../service/ApiService';
import './AdoptPage.css'

export default class AdoptPage extends React.Component{
    state = {
        dogs: null,
        cats: null,
        users: null,
        dogNode: null,
        catNode: null,
        name: null,
        count: null,
        disabled: false
    };

    findPosition = () =>{
        let count = 0;
        const name = window.localStorage.getItem('name');
        let currNode = this.state.users.firstl
        if(currNode){
            while(currNode.data !== name && currNode.next !== null){
                count ++;
                currNode = currNode.next
            }
            if(currNode.data !== name){
                count++;
                counsole.log("name does not appear")
            }
            handleDogAdopt = () => {
                ApiService.handleDogAdopt()
                .then(dogs => {
                    this.setState({dogs,dogNode:dogs.first})
                })
                .then(res => 
                    ApiService.handleUserDelete().then(users =>{
                        this.setState({users});
                        this.props.history.push('/')
                    })
                )
                .catch(error => console.log.error(error))
            }

            handleCatAdopt = () => {
                ApiService.handleCatAdopt()
                .then(cats => {
                    this.setState({cats, catNode: cats.first})
                })
                .then(res =>
                    ApiService.handleUserDelete().then(users => {
                        this.setState({user});
                        this.props.history.push('/')
                    })
                    )
                    .catch(error => console.error(error))
            };
            this.componentDidMount(){
                Promise.all([
                    fetch(`${config.API_ENDPOINT}/dogs`),
                    fetch(`${config.API_ENDPOINT}/cats`),
                    fetch(`${config.API_ENDPOINT}/adopters`),
                ])
                .then(([dogsRes, catsRes, usersRes]) =>{
                    if(!dogsRes.ok) return dogsRes.json().then(e => Promise.reject(e));
                    if(!catssRes.ok) return catsRes.json().then(e => Promise.reject(e));
                    if(!usersRes.ok) return usersRes.json().then(e => Promise.reject(e));

                    return Promise.all([dogsRes.json(), catsRes.json(), usersRes.json()]);
                })
                .then(([dogs,cats,users])=>{
                    this.setState({
                        dogs,
                        cats,
                        users,
                        dogNode: dogs.first,

                    })
                })
                .then(res => this.findPosition())
                .catch(error => {
                    console.error({error})
                })
            }
            handleSeeMore = () => {
                if(this.state.catNode.next && this.state.dogNode.next){
                    this.setState({
                        catNode: this.state.catNode.next,
                        dogNode: this.state.dogNode.next
                    })
                }
            }
        }
    }
}