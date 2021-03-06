import React, { Component } from 'react';
import { AppRegistry, Text,  Image , StyleSheet, Button, View, TextInput , Toast ,  TouchableOpacity} 
from 'react-native';
 

export default class TextInANest extends Component {
  
  constructor() {
 	   super()
  	this.state = {

  		resultText: "" ,
  		calculationText: ""
  	}
  		this.operations = ['del' , '+' , '-' , '*' , '/']

  }
 

  calculateResult()
  {
  	const text = this.state.resultText
  	console.log(eval(2+1))
  	text.split('').forEach(char => {
  		this.setState({
  				calculationText : eval(text)
  		})
  	})

  } // calculate result function


  operate(operation){
  	switch(operation) {
  		
  		case 'del':
  		let text = this.state.resultText.split('')
  		text.pop()
  		this.setState({
  			resultText: text.join('')
  		})
    break

  		case '+' : 	
  		case '-' : 	
  		case '*' : 	
  		case '/' : 	
  		const lastChar = this.state.resultText.split('').pop()

  		if (this.operations.indexOf(lastChar) > 0)
  			return

  		if (this.state.text == "")
  			return
  		this.setState({
  			resultText : this.state.resultText + operation
  		})


  	}
  }
 
  validate()
  {
  	const text = this.state.resultText
  	switch(text.slice(-1)) {

  		case '+' : 
  		case '-' : 
  		case '*' : 
  		case '/' : 
  			return false
  	}

return true

  } // validation function


  btnPressed(text) {
 

  	if (text == '=') {
  		return  this.validate() && this.calculateResult(this.state.resultText)
  	}

  	this.setState({
  		resultText : this.state.resultText+text
  	})
  } // click on button
  

  render() {
    
  let rows = []	

  for (let i = 0; i < 4; i++) {
  			
  		let row = []
  		let nums = [[1 , 2, 3], [4 , 5 , 6], [7 , 8 , 9], ['.' , 0 , "="] ]	
  			for(let j = 0 ; j < 3 ; j++){ 
  					row.push(<TouchableOpacity  key = {nums[i][j]} onPress = {() => this.btnPressed(nums[i][j])} style = {styles.btn}>
        <Text style ={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>) 
  			
  			}

  			rows.push(<View key = {i} style={styles.row}>{row}</View>)
  		}


  		let ops = []
  		for (let i = 0 ; i < 5 ; i++){
  			ops.push(<TouchableOpacity  key = {this.operations[i]} style = {styles.btn} onPress={() => this.operate(this.operations[i])}>
        <Text style ={[styles.btnText , styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>) 
  		}

    return (
      <View style = {styles.container}>
        
        <View style = {styles.result}>
        	<Text style = {styles.resultText}>
        	{this.state.resultText}
        	</Text>
        </View>
        <View style = {styles.calculation}>
        	<Text style = {styles.calculationText}>
        		{this.state.calculationText}   
        	</Text>
        </View>
       
        <View style = {styles.buttons}>
       <View style = {styles.numbers}>
       
       {rows} 
          </View>
        
        <View style = {styles.operations}>
					 	{ops}
      	</View>
      	</View>
     			</View>
    );
  }
}

const styles = StyleSheet.create({
 
	container : {
		flex : 1
	} ,

	result : {
		flex : 2,
		backgroundColor : 'white',
		justifyContent : 'center',
		alignItems : 'flex-end'	,
		justifyContent : 'center' ,
	} ,

resultText : {
		fontSize : 30,
		color : 'black'
	} , 
	
btn : {
		flex : 1,
		alignItems : 'center',
		alignSelf : 'stretch' ,
		justifyContent : 'center'
		} ,

btnText : {
		fontSize : 30 ,
		color : 'white'
		} ,
calculationText : {
		fontSize : 24,
		color : 'black'
	} ,

	white : {
		color : 'white'
	} ,
	
	row : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-around',
		alignItems: 'center'
	} ,
	
	calculation : {
		flex : 1,
		backgroundColor : 'white',
		alignItems : 'flex-end'
	} ,
	buttons : {
		flex : 7,
		flexDirection : 'row'
	} ,
	numbers : {
		flex : 3 ,
		backgroundColor : '#434343'
	} ,

operations : {
		flex : 1,
		justifyContent : 'space-around',
		backgroundColor : '#636363' ,
		alignItems : 'stretch'
	} ,

})