import React, { Component } from 'react'
import Axios from 'axios';


const Word = props => (
    <tr>
        <td>{props.word.word}</td>
        <td>{props.word.translation}</td>
    </tr>
)


export class wordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:5000/words/')
            .then(response => {
                this.setState({ list: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    wordList() {
        return this.state.list.map(current => {
            return <Word word={current} key={current._id} />
        })
    }
    render() {
        return (
            <div>
                <h3>All your Words</h3>
                <table className="table">
                    <thead className="thea-light">
                        <tr>
                            <th>word</th>
                            <th>translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.wordList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default wordList
