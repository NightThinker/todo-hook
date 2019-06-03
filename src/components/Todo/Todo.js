import React from 'react'
import  _ from 'lodash'
// import { } from 'react-icons'

import { ContainerStyle, ContentInputStyle, TodoStyle, TodoListStyle, TodoListTitleStyle, TodoListActionStyle, InputStyle, FaEditStyle, FaTrashAltStyle } from './TodoStyle'

const todo = props => {
  const todoList = [
    {
      id: '1', 
      title: 'youtube', 
      desc: 'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.', 
      date: '2019-06-03T15:25:48.255Z'
    },
    {
      id: '2', 
      title: 'facebook', 
      desc: 'Protecting Facebook Live from Abuse and Investing in Manipulated Media Research', 
      date: '2019-06-03T15:25:48.255Z'
    }
  ]

  return (
    <ContainerStyle>
      <ContentInputStyle>
        <InputStyle type='text' placeholder='Todo' />
        <button type='button'>Add</button>
      </ContentInputStyle>
      <TodoStyle>
        {_.map(todoList, (item, index) => (
          <TodoListStyle key={index}>
            <TodoListTitleStyle>
              <span>{item.title}</span>
              <span>{item.desc}</span>
              <span>{item.date}</span>
            </TodoListTitleStyle>
            <TodoListActionStyle>
              <FaEditStyle/>
              <FaTrashAltStyle/>
            </TodoListActionStyle>
          </TodoListStyle>
        ))}
      </TodoStyle>
    </ContainerStyle>
  )
}

export default todo