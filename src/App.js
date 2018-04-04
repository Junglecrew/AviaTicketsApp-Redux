import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import {LOAD_TICKETS_FROM_API_SUCCESS} from './constants'
import './styles/app.scss';
import About from './components/About'
import MainContent from './components/MainContent'
import Header from './components/Header/'
import store from './store'

export class App extends Component {

  //Прелоадер перед загрузкой всех билетов пока получаем с сервера информацию (имитация получения информации)
  getLoader() {
    return (
    <div className='cssload-loader'>
      <div className='cssload-inner cssload-one'></div>
      <div className='cssload-inner cssload-two'></div>
      <div className='cssload-inner cssload-three'></div>
    </div>
    )
  }
   
  
  componentDidMount() {
    fetch('http://5abd3a30fd24f60014af8345.mockapi.io/tickets')
    .then(response => response.json())
    .then(data => {{
      store.dispatch({
         type: LOAD_TICKETS_FROM_API_SUCCESS,
         payload: {data, isLoading: false}
       })
      }
    })
  }

  render() {
    const {tickets, isLoading} = this.props
    return (
      <div className="App">
        <Header />
          <Route path="/about" component={About}/>
          {!isLoading && <Route exact path='/tickets' render={(props) =>
            <MainContent {...props} tickets = {tickets}/>} /> }        
          {/* {!isLoading && <MainContent tickets = {tickets}/>} */}
          {/* {isLoading && this.getLoader()} */}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  tickets: state.ticketslist.tickets,
  isLoading: state.ticketslist.isLoading
})



export default withRouter(connect(mapStateToProps)(App));
