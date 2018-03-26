import React, { Component } from 'react';
import { connect } from 'react-redux';
import {LOAD_TICKETS_FROM_API_SUCCESS} from './constants'
import './styles/app.scss';
import MainContent from './components/MainContent'
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
    fetch('./tickets.json')
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        store.dispatch({
          type: LOAD_TICKETS_FROM_API_SUCCESS,
          payload: {data, isLoading: false}
        })
      },3000
    )}
    )
  }

  render() {
    const {tickets, isLoading} = this.props
    return (
      <div className="App">
        {!isLoading && <MainContent tickets = {tickets}/>}
        {isLoading && this.getLoader()}
      </div>
    );
  }

  //Имитируем получение json файла от сервера из БД, для наглядности используем setTimeout

}

const mapStateToProps = state => ({
  tickets: state.ticketslist.tickets,
  isLoading: state.ticketslist.isLoading
})



export default connect(mapStateToProps)(App);
