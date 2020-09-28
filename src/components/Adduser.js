import React,{Component} from 'react';

class Adduser extends Component{


    
        state={
            name:null,
            age:null,
            belt:null
        }

        changeHandler=(e)=>{
            this.setState(
                {
                    [e.target.id]:[e.target.value]
                }
            );
        }

        submitHandler=(e)=>{
            e.preventDefault();
            console.log(this.state);
            this.props.addNinjas(this.state);
        }
        render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    name:<input type='text' id='name' onChange={this.changeHandler}/>
                    age:<input type='text' id='age' onChange={this.changeHandler}/>
                    belt:<input type='text' id='belt' onChange={this.changeHandler}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Adduser;