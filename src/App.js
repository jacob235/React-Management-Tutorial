import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
  {
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : '두원재',
  'birthday' : '940719',
  'gender' : '남자',
  'job' : '프로그래머'
},
  {
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : '나동빈',
  'birthday' : '920219',
  'gender' : '남자',
  'job' : '디자이너'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c=>{
         return(
           <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
           />
         ); 
        })
      }
    </div>
  );
}

export default App;
