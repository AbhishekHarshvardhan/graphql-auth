import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onInputChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { errors } = this.props;
    return (
      <div className='row'>
        <form className='col s10' onSubmit={this.onSubmit.bind(this)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                value={this.state.email}
                id='email'
                placeholder='Email'
                type='email'
                name='email'
                onChange={this.onInputChange.bind(this)}
              />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                value={this.state.password}
                id='password'
                placeholder='Password'
                type='password'
                name='password'
                onChange={this.onInputChange.bind(this)}
              />
            </div>
          </div>
          <div className='errors'>
            {errors &&
              errors.length > 0 &&
              errors.map((error) => (
                <div style={{ color: 'red' }} key={error}>
                  {error}
                </div>
              ))}
            <br />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
