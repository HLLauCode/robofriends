import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import '../style/App.css';
import Scroll from "../components/Scroll";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => {
                this.setState({robots: users})
            })
    }

    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(robots.length === 0) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
        }
        
    }
}

export default App;