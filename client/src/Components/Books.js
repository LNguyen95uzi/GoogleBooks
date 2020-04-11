import React from "react"
import axios from "axios"

export default class Search extends React.Component {

    state = {
        googleTitle1: [],
        googleAuthor1: [],
        googleDescription1: [],
        googleThumbnail1: [],
        googleHref1: [],
        googleTitle2: [],
        googleAuthor2: [],
        googleDescription2: [],
        googleThumbnail2: [],
        googleHref2: [],
        userInput: ""
    }
    componentDidMount() {
        const key = "AIzaSyCtQA_4ffhfOxg54piXiawILYT1rc6ZxlE"
        var URL = `https://www.googleapis.com/books/v1/volumes?orderBy=relevance&key=${key}`

        axios.get(URL).then(res => {
            console.log(res.data.items[0].volumeInfo)
            this.setState({
                googleTitle1: res.data.items[0].volumeInfo.title,
                googleAuthor1: res.data.items[0].volumeInfo.authors,
                googleDescription1: res.data.items[0].volumeInfo.description,
                googleThumbnail1: res.data.items[0].volumeInfo.imageLinks.thumbnail,
                googleHref1: res.data.items[0].volumeInfo.previewLink,
                googleTitle2: res.data.items[1].volumeInfo.title[1],
                googleAuthor2: res.data.items[1].volumeInfo.authors[1],
                googleDescription2: res.data.items[1].volumeInfo.description,
                googleThumbnail2: res.data.items[1].volumeInfo.imageLinks.thumbnail,
                googleHref2: res.data.items[1].volumeInfo.previewLink,
            })
        })
    }
    render() {
        return (
            <div>
                <div className="column">
                    <div className="hero bg-gray">
                        <div className="hero-body"
                            style={{
                                textAlign: "center"
                            }}>
                            <h1>(React) Google Books Search</h1>
                            <p>Search for and Save Books of Interest</p>
                        </div>
                    </div>
                </div>
                <div className="column"
                    style={{
                        marginTop: "10px"
                    }}>
                    <div className="hero bg-gray" onSubmit={TouchList.componentDidMount}>
                        <div className="hero-body">
                            <h3>Book Search</h3>
                            <input type="text" placeholder="Harry Potter" name="Search" value={this.state.userInput}></input>
                            <button type="submit"
                                style={{
                                    marginLeft: "10px"
                                }}
                            >Search</button>
                        </div>
                    </div>
                </div>
                <div className="column"
                    style={{
                        marginTop: "10px"
                    }}>
                    <div className="hero bg-gray">
                        <div className="hero-body"
                            style={{
                                textAlign: "center"
                            }}>
                            <h3>Results</h3>
                            <h1>{this.state.googleTitle1}</h1>
                            <h2>{this.state.googleAuthor1}</h2>
                            <p>{this.state.googleDescription1}</p>
                            <img src={this.state.googleThumbnail1} />
                            <br></br>
                            <a href={this.state.googleHref1} target="_blank" rel="noopener noreferrel">View</a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="hero bg-gray">
                        <div className="hero-body"
                            style={{
                                textAlign: "center"
                            }}>
                            <h1>{this.state.googleTitle2}</h1>
                            <h2>{this.state.googleAuthor2}</h2>
                            <p>{this.state.googleDescription2}</p>
                            <img src={this.state.googleThumbnail2} />
                            <br></br>
                            <a href={this.state.googleHref2} target="_blank" rel="noopener noreferrel">View</a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}