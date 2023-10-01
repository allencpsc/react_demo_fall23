import React, {Component} from "react";

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
    }

    render(){
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <React.Fragment>
                <button type="button" className="btn btn-dark" onClick={increment}>
                    {this.state.count}
                </button>
            </React.Fragment>
        )
    }
}

export default Body
