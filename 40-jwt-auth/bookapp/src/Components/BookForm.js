import React from 'react';

class BookForm extends React.Component {

  initialState = {
    title: '',
    img: ''
  }

  state = {...this.initialState}

  handleOnChange = (e) => {
    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      title: this.state.title,
      img: this.state.img
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
          Image:
          <input type="text" name="img" value={this.state.img} onChange={this.handleOnChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default BookForm;
