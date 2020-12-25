import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link } from 'react-router';
import mutation from '../mutation/logout';

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query }],
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) return <div />;

    if (user)
      return (
        <div>
          <li>
            <a
              onClick={this.onLogoutClick.bind(this)}
              className='waves-effect waves-light btn'
            >
              Logout
            </a>
          </li>
        </div>
      );

    return (
      <div>
        <li>
          <Link to='/login' className='waves-effect waves-light btn'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/signup' className='waves-effect waves-light btn'>
            Signup
          </Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav className='transparent'>
        <div className='nav-wrapper'>
          <ul className='right'>{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(graphql(query)(Header));
