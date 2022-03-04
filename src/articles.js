// import React, {Component} from 'react';
// import { Grid ,Card, CardGroup, Button, Container, Row, Col, Carousel} from "react-bootstrap";
// import "./article.css";

// require('dotenv').config()

// export default class Articles extends Component {



//     constructor(props){
//         super(props);
//         this.key = '1002ab6d1amsh969613d6623a143p13b559jsn0395c6b6fa85'
//         this.state = {
//             articles: [],
//         }
//     }
    
//     retrieveData(){
//         fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=Air%20Quality%20in%20"+this.state.cityName+"&pageNumber=1&pageSize=4&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//                 "x-rapidapi-key": this.key
//             }
//         })
//         .then((response) => response.json())
//         .then(data => {
//             console.log(data);
//             this.setState({
//                 articles: data.value
//             });
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     }


//     componentDidMount(){
//         console.log("Articles mounted...")
//         this.retrieveData();
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
    
//         let parsed = parseInt(this.state.postalCode);
    
//         if (isNaN(parsed)){
//           this.retrieveDataFromCity(this.state.postalCode);
//         }else{
//           try {
//             this.retrieveDataFromPostal(this.state.postalCode);
//           } catch (e) {
//             alert("Not a valid zipcode");
            
//           }
//         }
        
//         this.setState({ postalCode:this.state.postalCode});
//       };
    
//       handleChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({
//           [name]: value,
          
//         });
//       };

//     render(){
//         return(
            
              
//                  <Container>  
            
//             <Row lg='auto'>
            
//             {this.state.articles.map((value, index) => {
//                  return <div key={index} className='articles'>
//            <Col>
//                 <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={value.image.url} />
//                 <Card.Body>
//                   <Card.Title>{value.title}</Card.Title>
//                   <Card.Text>
//                   {value.description}
//                   </Card.Text>
//                   <Button variant="primary"> <a href={value.url}>Click More Information</a></Button>
//                 </Card.Body>
                 
//               </Card>
//              </Col>
//             </div>  
                    
//             })}
//               </Row>
     
//                </Container>
            
            

           
//         );
//     }
// }