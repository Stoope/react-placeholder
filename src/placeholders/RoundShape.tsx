import * as React from 'react';
import * as PropTypes from 'prop-types';

export type Props = {
  color: string,
  style?: React.CSSProperties,
  className?: string
}

export default class RoundShape extends React.Component<Props> {

  static propTypes = {
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const { className, style, color } = this.props;

    const defaultStyles = {
      backgroundColor: color,
      borderRadius: '500rem',
      width: '100%',
      height: '100%'
    };

    const classes = ['round-shape', className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...defaultStyles, ...style }} />
    );
  }

}
