// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Carousel from './components/Carousel';
// import Items from './components/Items';
// //import Item from './components/Item';
// import Categories from './components/Categories';
// import ShowFullItem from './components/ShowFullItem';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// //import MapComponent from './pages/AboutPage';

// import slide1 from "./img/a.fay.jpg";
// import slide2 from "./img/school1.5.jpg";
// import slide3 from "./img/sch1.jpg";

// const images = [slide1, slide2, slide3];



// // function App() {
// //   return (
// //     <div className="App">
// //     <Navbar/>
// //     <Carousel images={images} />
// //     <Item/>
// //     <Footer/>
// //     </div>
// //   );
// // }

// // export default App;





// class App extends React.Component{
  
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       // orders:[],
//       currentItems: [],
//       items:[
//         {
//           id:1,
//           title:"Ахмадалиева Дилорам",
//           img:'dil.jpg',
//           desc:'математика мугалим',
//           category:'математика мугалим',
          
//         },
//         {
//           id:2,
//           title:"Мирзаматова Назира",
//           img:'sch1.jpg',
//           desc:'биология мугалим',
//           category:'биология мугалим',
          
//         },
//         {
//           id:3,
//           title:"Мирпозилова Дилором",
//           img:'sch1.jpg',
//           desc:'математика мугалим',
//           category:'математика мугалим',

//         }, {
//           id:4,
//           title:"Мирпозилова Дилнавоз",
//           img:'a.fay.jpg',
//           desc:'баштапгыч класс мугалим',
//           category:'баштапгыч класс мугалим',
          
//         }, {
//           id:5,
//           title:"Олпаизов Шухрат",
//           img:'a.fay.jpg',
//           desc:'ОРус тили мугалим',
//           category:'ОРус тили мугалим',
         
//         }, {
//           id:6,
//           title:"Абдунабиева Лола",
//           img:'a.fay.jpg',
//           desc:'Химия мугалим',
//           category:'Химия мугалим',
         
//         }, {
//           id:7,
//           title:"Абдухамитова Дилрабо",
//           img:'a.fay.jpg',
//           desc:'кыргыз тили мугалим',
//           category:'кыргыз тили мугалим',
         
//         },
//         {
//           id:8,
//           title:"Жумабоева Нодира",
//           img:'sch1.jpg',
//           desc:'Озбек тили мугалим',
//           category:'Озбек тили мугалим',
         
//         }, {
//           id:9,
//           title:"Сайитова Мархабо",
//           img:'dil.jpg',
//           desc:'кыргыз тили мугалим',
//           category:'кыргыз тили мугалим',
         
//         },
//       ],
//       showFullItem:false,
//       fullItem:[]
//     }
//     this.state.currentItems = this.state.items
//     // this.addToOrder = this.addToOrder.bind(this)
//     // this.deleteOrder = this.deleteOrder.bind(this)
//     this.chooseCategory = this.chooseCategory.bind(this)
//     this.onShowItem = this.onShowItem.bind(this)
//   }
//   render(){
//   return (
//     <div className="wrapper">
      
//       <Router>
     
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//       <Navbar />
      
//       <Carousel images={images} />
      
//       <Categories chooseCategory={this.chooseCategory}/>
//       <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
//       {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      
//       <Footer/>
      
//       </Router> </div>
//   );
// }
// onShowItem(item) {
//   this.setState({fullItem:item})
//   this.setState({showFullItem: !this.state.showFullItem})
// }
// chooseCategory(category) {
//   // console.log(category)
//   if(category === "all") {
//     this.setState({currentItems:this.state.items})
//     return
//   }
//   this.setState({
//     currentItems:this.state.items.filter(el => el.category === category)
//   })
// }
// // deleteOrder(id) {
// //   //  console.log(id)
// //   this.setState({orders: this.state.orders.filter(el => el.id !==id)})
// // }
// //  addToOrder(item){
// //    let isInArray = false;
// //    this.state.orders.forEach(el => {
// //     if(el.id === item.id)
// //       isInArray = true
// //    })
// //     if(!isInArray)
// //     this.setState({orders: [...this.state.orders, item ]}
//     //   , () => {
//     //   console.log(this.state.orders)
//     // }
// //  )
// // }
// }

// export default App;
/////////////////////////////////////////////
//////////////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import slide1 from "./img/a.fay.jpg";
import slide2 from "./img/school1.5.jpg";
import slide3 from "./img/sch1.jpg";

const images = [slide1, slide2, slide3];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItems: [],
      items: [
        { id: 1, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 2, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
        { id: 3, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 4, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
        { id: 5, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
        { id: 6, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
        { id: 7, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 8, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
        { id: 9, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 10, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 11, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
        { id: 12, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 13, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
        { id: 14, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
        { id: 15, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
        { id: 16, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 17, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
        { id: 18, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 19, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 20, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
        { id: 21, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 22, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
        { id: 23, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
        { id: 24, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
        { id: 25, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 26, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
        { id: 27, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 28, title: "Ахмадалиева Дилорам", img: 'dil.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 29, title: "Мирзаматова Назира", img: 'sch1.jpg', desc: 'биология мугалим', category: 'биология мугалим' },
        { id: 30, title: "Мирпозилова Дилором", img: 'sch1.jpg', desc: 'математика мугалим', category: 'математика мугалим' },
        { id: 31, title: "Мирпозилова Дилнавоз", img: 'a.fay.jpg', desc: 'баштапгыч класс мугалим', category: 'баштапгыч класс мугалим' },
        { id: 32, title: "Олпаизов Шухрат", img: 'a.fay.jpg', desc: 'ОРус тили мугалим', category: 'ОРус тили мугалим' },
        { id: 33, title: "Абдунабиева Лола", img: 'a.fay.jpg', desc: 'Химия мугалим', category: 'Химия мугалим' },
        { id: 34, title: "Абдухамитова Дилрабо", img: 'a.fay.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
        { id: 35, title: "Жумабоева Нодира", img: 'sch1.jpg', desc: 'Озбек тили мугалим', category: 'Озбек тили мугалим' },
        { id: 36, title: "Сайитова Мархабо", img: 'dil.jpg', desc: 'кыргыз тили мугалим', category: 'кыргыз тили мугалим' },
      ],
      showFullItem: false,
      fullItem: [],
    };

    this.state.currentItems = this.state.items;
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      // <Router>
      //   <div className="wrapper">
      //     <Navbar />
      //     <Routes>
      //       <Route path="/" element={<HomePage />} />
      //       <Route path="/about" element={<AboutPage />} />
      //       <Route path="/contact" element={<ContactPage />} />
      //     </Routes>
      //     <Carousel images={images} />
      //     <Categories chooseCategory={this.chooseCategory} />
      //     <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
      //     {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} />}
      //     <Footer />
      //   </div>
      // </Router>

      <div className="wrapper">
      
           <Router>
           
             <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
             </Routes>
          <Navbar />
            
            <Carousel images={images} />
            
          <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem}/>}
            
       <Footer/>
            
           </Router> </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category),
    });
  }
}

export default App;
