import React from 'react';
import css from './Stars.module.css';
import StarSvg from './img/Star.svg';
import HalfStarSvg from './img/HalfStar.svg';

interface StarsProps {
  count: number;
}

export class Stars extends React.Component<StarsProps> {

  renderStar(_: any, index: number) {
    const { count } = this.props;

    if (index >= count) {
      return (
        <HalfStarSvg key={index}/>
      );
    } else {
      return (
        <StarSvg key={index}/>
      );
    }
  }

  render() {
    return (
      <div className={css.index}>
        {Array(5).fill('').map(this.renderStar, this)}
      </div>
    );
  }
}