import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState]: false});
    } else if (Object.keys(this.state).length === 0) {
      this.setState({[menuState]: true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState]: true});
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo"/></a>
          <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo"/></a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>
          <li className={this.isPathActive('/testaudiofilepage') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/testaudiofilepage">
              <span className="menu-icon"><i className="mdi mdi-table-large"/></span>
              <span className="menu-title">TestAudioFilePage</span>
            </Link>
          </li>
          <li className={this.isPathActive('/page1') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/page1">
              <span className="menu-icon"><i className="mdi mdi-table-large"/></span>
              <span className="menu-title">Page 1</span>
            </Link>
          </li>
          <li className={this.isPathActive('/page3') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/page3">
              <span className="menu-icon"><i className="mdi mdi-table-large"/></span>
              <span className="menu-title">Page 3</span>
            </Link>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Liens externes</span>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="https://docs.google.com/document/d/1g7EoxtdqHZ9NhvxkSR6ZpLshNBI8jSgfmUW3UnUa3Is/edit" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon"><i className="mdi mdi-file-document-box"/></span>
              <span className="menu-title">Rapport</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="https://github.com/hydralom/esilv_projet_pas" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon"><i className="mdi mdi-github-circle"/></span>
              <span className="menu-title">Github</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);
