import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/actionData';
import Rectangle from '../components/Rectangle';
import Title from '../components/Title';
import Select from '../components/Select';

class Shop extends Component {

  state = {
    helmets: 'helmets',
    gloves: 'gloves',
    chests: 'chests',
    boots: 'boots',
    swords: 'swords'
  }

  handleEventChange(e){ //костыль
    const check = e.target.value;
    const {data} = this.props;
    if(~check.indexOf('helmet')){
      this.setState({helmets: check})

      for(let ggg in data){
        return console.log(data[ggg]) //продолжение
      }

    }
    if(~check.indexOf('gloves')){
      this.setState({gloves: check})
    }
    if(~check.indexOf('chest')){
      this.setState({chests: check})
    }
    if(~check.indexOf('boots')){
      this.setState({boots: check})
    }
    if(~check.indexOf('sword')){
      this.setState({swords: check})
    }
  }

  componentDidMount(){
    this.props.fetchData(`https://json-game.herokuapp.com/equipment`);
  }
  render(){
    const { data, error, loading } = this.props;
    
    const renderCategory = Object.keys(data).map((item, i) => {
      const renderItems = (category) => category.map(item => (
        <option key={item.id} value={item.name}>{item.name}</option>
      ));
      return(
        <Select 
          key={i} 
          category={item} 
          value={this.state[item]}
          onChange={this.handleEventChange.bind(this)}
          >
          {renderItems(data[item])}
        <option value={item}></option>
        </Select>
      );
    })

    if(error){
      return <h5>Error</h5>
    }
    if(loading){
      return <h5>Loading</h5>
    }
    return(
      <Rectangle>
        <Title>shop</Title>
        <form>
          {renderCategory}
        </form>
      </Rectangle>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.gameData.data,
    error: state.gameData.error,
    loaging: state.gameData.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(fetchData(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);