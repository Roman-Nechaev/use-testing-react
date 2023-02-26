import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false, // начальное состояние меню "стрытое"
  };

  toggle = () => {
    // метод отвечает за скрытие и отображение меню "ПЕРЕКЛЮЧАТЕЛЬ"
    this.setState(prevState => ({
      visible: !prevState.visible, // отрицание - если  false будет true и наоборот
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : ' Показать'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
