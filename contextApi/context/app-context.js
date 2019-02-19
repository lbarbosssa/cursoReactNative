import React from 'React'

//Initial State
const initialState = {
    favoriteAnimal: 'pato',
    anterior: ''
}

//Cotext

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
    }

    setFavoriteAnimal = (text) =>{
        this.setState({anterior: this.state.favoriteAnimal, favoriteAnimal: text})
    }

    render(){
        return(
            <AppContext.Provider 
                value={{ 
                    favoriteAnimal: this.state.favoriteAnimal,
                    anterior: this.state.anterior,
                    setFavoriteAnimal: this.setFavoriteAnimal }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}