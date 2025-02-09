import React, { Component } from 'react';

export class Categories extends Component {
    constructor(props){
          super(props)
          this.state = {
            categories: [
                {
                  key: "all",
                  name: "Бардыгы",

                },
                {
                    key: "биология мугалим",
                    name: "биология мугалим",
  
                  },
                  {
                    key: "кыргыз тили мугалим",
                    name: "кыргыз тили мугалим",
  
                  },
                  {
                    key: "математика мугалим" ,
                    name: "математика мугалим",
  
                  },
                  {
                    key:  "Озбек тили мугалим",
                    name: "Озбек тили мугалим",
  
                  },
                  {
                    key: "ОРус тили мугалим",
                    name: "ОРус тили мугалим",
  
                  },
                  {
                    key: "кыргыз тили мугалим",
                    name: "кыргыз тили мугалим",
  
                  },
                  {
                    key: "математика мугалим" ,
                    name: "математика мугалим",
  
                  },
                  {
                    key:  "Озбек тили мугалим",
                    name: "Озбек тили мугалим",
  
                  },
                  {
                    key: "биология мугалим",
                    name: "биология мугалим",
  
                  },
                  {
                    key: "кыргыз тили мугалим",
                    name: "кыргыз тили мугалим",
  
                  },
                  {
                    key: "баштапгыч класс мугалим" ,
                    name: "баштапгыч класс мугалим",
  
                  },
                  {
                    key:  "Озбек тили мугалим",
                    name: "Озбек тили мугалим",
  
                  },
                  {
                    key: "математика мугалим" ,
                    name: "математика мугалим",
  
                  },
                  {
                    key:  "Озбек тили мугалим",
                    name: "Озбек тили мугалим",
  
                  },
            ]
          }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;