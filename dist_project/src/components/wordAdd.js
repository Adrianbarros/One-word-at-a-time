import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

export class wordAdd extends Component {
    constructor(props) {
        super(props);

        this.onChangeWord = this.onChangeWord.bind(this);
        this.onChangetarnslation = this.onChangetarnslation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            word: '',
            translation: '',
            list: []
        }
    }
    componentDidMount() {
        // this.setState({
        //     list: ['test'],
        //     word: 'hi',
        //     translation: 'hola'
        // })
    }
    onChangeWord(e) {
        this.setState({
            word: e.target.value
        });
    }
    onChangetarnslation(e) {
        this.setState({
            translation: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const definitions = {
            word: this.state.word,
            translation: this.state.translation
        }
        console.log(definitions)
        axios.post('http://localhost:5000/words/add', definitions)
            .then(res => console.log(res.data));
        window.location = '/word-list'
    }
    render() {
        return (

            <div style={{ position: 'center' }}>

                <h3>Your Word of the Day</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Your Word</label>
                        <input
                            type="text"
                            required
                            value={this.state.word}
                            onChange={this.onChangeWord}
                        />

                    </div>
                    <div className="form-group">

                    </div>
                    <label>translation</label>
                    <input
                        type="text"
                        value={this.state.translation}
                        onChange={this.onChangetarnslation}
                    />
                    <div className="form-group">
                        <input type="submit" value="Get tranlation" className="btn btn-primary" />
                    </div>
                </form>

            </div>

        )
    }
}

export default wordAdd
