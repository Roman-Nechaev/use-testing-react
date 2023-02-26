import React, { Component } from 'react';

import './ColorPicker.css';

class ColorPiker extends Component {
  state = {
    activeOptionIdx: 0, // элемент выбираеться по индексу
  };

  setActiveIdn = index => {
    this.setState({ activeOptionIdx: index });
  };

  MakeOptionClassName = index => {
    const optoinClasses = ['ColorPicker__option']; // базовый класс
    //если индекс элемента совпадает с значением выбранного элемента то добавляем по условию класс
    if (index === this.state.activeOptionIdx) {
      optoinClasses.push('ColorPicker__option--active');
    }

    return optoinClasses.join(' ');
  };

  render() {
    // Деструктуризация
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    //
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.MakeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdn(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPiker;
