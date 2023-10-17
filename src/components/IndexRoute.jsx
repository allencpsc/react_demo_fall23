import React, {Component} from "react";
import axios from 'axios';

class IndexRoute extends Component{
    constructor(props){
        super(props)
        this.state = {
            apod : {}
        }
    }

    componentDidMount(){
        //axios api call
        axios.get('https://api.nasa.gov/planetary/apod?api_key=P8Lb4AhWTrFAVe0V3iLEKrxhxsT1iaz4Pan5QuWs')
            .then((response) => {
                this.setState({apod: response.data})
                console.log(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
    }

    render(){
        const {apod} = this.state
        return(
            <React.Fragment>
                <div class="container">
                    Date: {apod.date}<br></br>
                    Title: {apod.title}<br></br>
                </div>
                <div class="container">
                    <img src={apod.url} alt={apod.alt} width="500" /><br></br>
                </div>
                <div class="container">
                    Description: {apod.explanation}
                </div>
            </React.Fragment>
        )
    }
}

export default IndexRoute
