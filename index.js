import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/style.css';


export default class ModalWindow extends Component {


	static propTypes = {
		visible: PropTypes.bool,
		fullsize: PropTypes.bool,
		className: PropTypes.string,
//		onClose: PropTypes.func,
//		onUnmount: PropTypes.func
	};





	static defaultProps = {
		visible: false,
		fullsize: false
	};





	state = {
		visible: false
	};





/** @private @type {string} */	
	_cssClassName = 'ui-modal-window';





	componentDidMount() {
// Show modal window fx helper
		setTimeout(() => {
			this.setState({visible: true});
		}, 0);
	};





	close(callback) {
// Hide modal window fx helper
		this.setState({visible: false}, () => {
//			if (this.props.onClose) {
//				this.props.onClose.call(this);
//			}
			if (callback) {
				setTimeout(() => {
					callback.call(this);
//					if (this.props.onUnmount) {
//						this.props.onUnmount.call(this);
//					}
				}, 200);
			}
		});
	};





	render() {
		let className = this._cssClassName
			+ (this.state.visible ? ' ' + this._cssClassName + '--visible' : '')
			+ (this.props.fullsize ? ' ' + this._cssClassName + '--fullsize' : '')
			+ (this.props.className ? ' ' + this.props.className : '');
		
		return (
			<div className={className}>
				<div className={this._cssClassName + '__backdrop'}>
					<div className={this._cssClassName + '__window-container'}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	};

}
