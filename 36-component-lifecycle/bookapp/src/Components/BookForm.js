import React from 'react';

class BookForm extends React.Component {

  initialState = {
    title: '',
    author: '',
    img: '',
    read: false
  }

  state = {...this.initialState}

  componentDidMount(){
    console.log(this.__proto__.constructor.name, "mounted.")
  }

  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update")
  }


  handleOnChange = (e) => {

    // this.setState({
    //   [e.target.name]: e.target.value
    // })

    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if(e.target.name === 'author'){
      this.setState({ author: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img,
      read: this.state.read
    }
    this.props.handleAppSubmit(newBook)
    this.setState(this.initialState)
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={this.state.author} onChange={this.handleOnChange} />
        </label>
        <label>
          Image:
          <input type="text" name="img" value={this.state.img} onChange={this.handleOnChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default BookForm;
