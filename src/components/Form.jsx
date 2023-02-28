import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  handaleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handaleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handaleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handaleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handaleChange}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            id={this.tagInputId}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handaleChange}
          />
        </label>
        <p>Ваш уровень: </p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handaleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handaleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handaleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handaleLicenceChange}
          />
          Согласен на условия
        </label>

        <br />
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
