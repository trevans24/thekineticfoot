import React, { Component, Fragment } from 'react';
import Data from '../../data/Contact.json';
import axios from 'axios';

export default class Contact extends Component {

  state = {
    name: '',
    email: '',
    message: '',
    formError: true,
    nameError: true,
    emailError: true,
    messageError: true
  };

  handleInputChange = (e, name, err) => {

    if((e.target.value !== '' || null) && name !== 'email') {

      let val = {...this.state, [name] : e.target.value, [err]: false};

      this.setState(val);
    }
    if((e.target.value !== '' || null ) && name === 'email') {

      let test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if(e.target.value.match(test)) {
        let val = {...this.state, [name] : e.target.value, [err]: false};

        this.setState(val);
      }
      if(!e.target.value.match(test)) {
        let val = {...this.state, [name] : e.target.value, [err]: true};

        this.setState(val);
      }
    }
    if(e.target.value === '') {

      let val = {...this.state, [name] : e.target.value, [err]: true};

      this.setState(val);
    }
    if(!this.state.nameError && !this.state.emailError && !this.state.messageError) {
      this.setState({
        formError: false
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('/contact', message, {headers: {'Access-Control-Allow-Origin': '*'}}).then(res => {
      console.log(res);
    });
  }

  checkDisabled = () => {
    if(!this.state.nameError && !this.state.emailError && !this.state.messageError && !this.state.formError) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    return (
      <div className="contact section">
        <span className="title">{Data.title}</span>
        <div className="contact-section">
          {
            Data.form ?
            <Fragment>
              <form className="contact-form" onSubmit={this.handleSubmit}>
                <span className="form-title">{Data.form.form_title}</span>
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    aria-label="name"
                    onChange={(e) => this.handleInputChange(e, 'name', 'nameError')}
                    style={{borderColor: this.state.nameError ? '#FF5057' : '#D3DFB8'}}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    aria-label="email"
                    onChange={(e) => this.handleInputChange(e, 'email', 'emailError')}
                    style={{borderColor: this.state.emailError ? '#FF5057' : '#D3DFB8'}}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    aria-label="message"
                    cols="30"
                    rows="10"
                    onChange={(e) => this.handleInputChange(e, 'message', 'messageError')}
                    style={{borderColor: this.state.messageError ? '#FF5057' : '#D3DFB8'}}
                    ></textarea>
                </div>
                {
                  this.state.formError ?
                  <div className="error-message">
                    <span>** Required Fields Cannot Be Empty</span>
                  </div>
                  :
                  this.state.nameError ?
                  <div className="error-message">
                    <span>** Name Cannot Be Empty</span>
                  </div>
                  :
                  this.state.emailError ?
                  <div className="error-message">
                    <span>** Email Cannot Be Empty</span>
                  </div>
                  :
                  this.state.messageError ?
                  <div className="error-message">
                    <span>** Message Cannot Be Empty</span>
                  </div>
                  :
                  null
                }
                <button className="btn-secondary no-hover" disabled={this.checkDisabled()} type="submit">{Data.form.button_text}</button>
              </form>
              <div className="more-info">
                <span className="form-title">Hours of Operation</span>
                <div className="hours-operation">
                  {
                    Data.hours_of_operation.map(({days, hours}) => (
                      <div className="time-slot" key={days}>
                        <span className="day">{days}:</span>
                        <span className="hours">{hours}</span>
                      </div>
                    ))
                  }
                </div>
                <a href="https://www.google.com/maps?daddr=12510+East+Iliff+Avenue+Ste.+120,+Aurora,+Colorado+80014,+United+States"
                  target="_blank"
                  className="form-title darken"
                  rel="noopener noreferrer">
                  Directions To Our Clinic
                </a>
                <div className="bottom-section">
                  <span className="form-title">{Data.emergency_contact}</span>
                  <p className="disclaimer">
                    If you are having a medical emergency please call <a href="tel:911" className="darken large">911</a>,
                    or go to the nearest Emergency Room or Urgent Care facility.
                  </p>
                </div>
              </div>
            </Fragment>
            :
            null
          }
        </div>
      </div>
    )
  }
};