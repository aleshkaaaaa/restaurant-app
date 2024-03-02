import RestaurantComponent from '../RestaurantComponent.js'
// import {data} from '../data/data.js'
import Form from 'react-bootstrap/Form'
import InputGroup from  'react-bootstrap/InputGroup'
import { useEffect, useState } from 'react';

export default function IndexPage() {
  
  const [search, setSearch] = useState('')
  const [restaurants, setRestaurants] = useState([])

  console.log(search)

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(restaurants => {
        setRestaurants(restaurants);
      });
    });
  }, []);

  return (
    <div className="IndexPage">
      <header>
        <Form>
          <InputGroup>
            <Form.Control 
              className='searchForm'
              type='text' 
              placeholder='Поиск по названию ресторана...'
              onChange={(e) => setSearch(e.target.value)}/>
          </InputGroup>
        </Form>
      </header>
      {restaurants.filter((item) => {
          return search.toLowerCase() === '' ? true : item.title.toLowerCase().includes(search.toLowerCase());
        }).map((item, index) => (
          <RestaurantComponent key={index} {...item} />
      ))}
    </div>
  )
}