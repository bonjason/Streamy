import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createStream} from '../../actions'

class StreamForm extends React.Component {
	renderInput(formProps){
		return (
			<div className = "field">
				<label>{formProps.label}</label>
				<input 
					onChange = {formProps.input.onChange}
					value = {formProps.input.value}
				/>
			</div>
			
		);
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render(){
		return (
			<form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
				<Field name = "title" component = {this.renderInput} label = "Enter Title"/>
				<Field name = "description" component = {this.renderInput} label = "Enter Description"/>
				<button className = "ui button primary">Submit</button>
			</form>
		);
	}
	
}

export default reduxForm({
	form: "StreamForm"
})(StreamForm);

