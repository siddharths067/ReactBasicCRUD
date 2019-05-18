import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Person extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name : this.props.name,
            age : this.props.age
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        alert("you clicked on " + this.state.name)
    }
    render(){
        return (
            <div className="person_holder" key={this.state.name} onClick ={this.handleClick}>
                <h1>{this.state.name}</h1>
                <h2>is {this.props.age} years old</h2>
            </div>
        )
    }
}


class PersonList extends React.Component{

    render(){
        return (
            <div className="person_list">
                {
                    Array.from(Array(this.props.len).keys()).map(
                        i => <Person name = {this.props.names[i]} age = {this.props.ages[i]}/>
                    )
                }
            </div>
        )
    }
}


class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.nameList = []
        this.ageList = []
    }

    updatePersonList() {
        return () => {
            this.nameList.push(document.getElementById("perName").value);
            this.ageList.push(document.getElementById("perAge").value);
            
            document.getElementById("perName").value = ""
            document.getElementById("perAge").value = ""
            
            ReactDOM.render(<PersonList names={this.nameList} ages={this.ageList} len={this.nameList.length} />, document.getElementById("listView"));
        };
    }

    render(){
        return (
                <div id="crudApp">
                Name : <input id="perName" type = "text"></input>
                Age : <input id="perAge" type = "text"></input> <br></br>
                <button onClick= {this.updatePersonList()}> Submit Person </button>
                <div id="listView"></div>
                </div>
            )
    }
}


ReactDOM.render(
    <NameForm />
    ,document.getElementById('root')
)



