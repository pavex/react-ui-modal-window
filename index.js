import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/style.css';


export default class ModalWindow extends Component {


	static propTypes = {
		id: PropTypes.string,
		visible: PropTypes.bool,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		fullsize: PropTypes.bool,
		className: PropTypes.string
	};





	static defaultProps = {
		id: null,
		visible: false,
		fullsize: false,
		width: '60%',
		height: 'auto'
	};





	state = {
		visible: false,
		allowRender: false
	};





/** @private @type {string} */	
	_cssClassName = 'ui-modal-window';





	componentWillReceiveProps(nextProps) {
		if (nextProps.visible !== this.props.visible) {
			if (nextProps.visible === true) {
				this.setState({allowRender: true}, () => {
					this.setState({visible: true});
				});
			}
			else {
				this.setState({visible: false}, () => {
					setTimeout(() => {this.setState({allowRender: false})}, 200)
				});
			}
		}
	};





	render() {
		if (!this.state.allowRender) {
			return null;
		}
		let className = this._cssClassName
			+ (this.state.visible ? ' ' + this._cssClassName + '--visible' : '')
			+ (this.props.fullsize ? ' ' + this._cssClassName + '--fullsize' : '')
			+ (this.props.className ? ' ' + this.props.className : '');
		
		let {id, width, height, fullsize} = this.props;
		return (
			<div className={className} id={id}>
				<div className={this._cssClassName + '__backdrop'}>
					<div className={this._cssClassName + '__window-container'}>
						<div className={this._cssClassName + '__window'} style={{width, height}}>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	};

}
