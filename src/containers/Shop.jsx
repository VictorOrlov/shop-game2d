import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/actionData';
import { changeCategory } from '../store/actions/actionStats';
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
    const {data,changeCategory} = this.props;
  // Получаю нужный объект
    function desiredObject(){
    //Фильтрую категории
      const desCat = Object.keys(data).filter(item =>{
        return  ~JSON.stringify(data[item]).indexOf(check);
      });
     return data[desCat[0]].filter(item => item.name === check)[0];
    }

    if(~check.indexOf('helmet')){
      this.setState({helmets: check});
      changeCategory("helmets", desiredObject());
    }
    if(~check.indexOf('gloves')){
      this.setState({gloves: check});
      changeCategory("gloves", desiredObject());
    }
    if(~check.indexOf('chest')){
      this.setState({chests: check});
      changeCategory("chests", desiredObject());
    }
    if(~check.indexOf('boots')){
      this.setState({boots: check});
      changeCategory("boots", desiredObject());
    }
    if(~check.indexOf('sword')){
      this.setState({swords: check});
      changeCategory("swords", desiredObject());
    }
  }

  componentDidMount(){
    this.props.fetchData(`https://json-game.herokuapp.com/equipment`);
  }
  render(){
    const { 
      data, error, loading, 
      helmets, gloves, chests, 
      boots, swords } = this.props;
    
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
        <option disabled value={item} style={{display: 'none'}}></option>

        </Select>
      );
    })

    const count = (+helmets) + (+gloves) + (+chests) + 
                  (+boots) + (+swords);

    if(error){
      return <h5>Error</h5>
    }
    if(loading){
      return <h5>Loading</h5>
    }
    return(
      <Rectangle>
        <Title>shop</Title>
        <form style={{height: '385px'}}>
          {renderCategory}
          <hr/>
        </form>
        <div >
          count: {count}
        </div>
      </Rectangle>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.gameData.data,
    error: state.gameData.error,
    loaging: state.gameData.loading,
    helmets: state.categories.helmets.price,
    gloves: state.categories.gloves.price,
    chests: state.categories.chests.price,
    boots: state.categories.boots.price,
    swords: state.categories.swords.price,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(fetchData(url)),
    changeCategory: (name , item) => dispatch(changeCategory(name, item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);