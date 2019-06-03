import styled from 'styled-components'

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const ContentInputStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const TodoStyle = styled.ul`
  display: flex;
  flex-direction: column;
`

export const TodoListStyle = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 10px;
  border-bottom: 1px solid gray;
  background: #fafafa;
  border-radius: 5px;
  margin-bottom: 2px;
`

export const TodoListTitleStyle =  styled.div`
  display: flex;
  flex-direction: column;
`

export const TodoListActionStyle =  styled.div`
  display: flex;
  flex-direction: row;
`

export const InputStyle = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid;
`

export const FaEditStyle = styled(FaEdit)`
  color: red;
  &:hover {
    color: green;
  }
`
export const FaTrashAltStyle = styled(FaTrashAlt)`
  color: red;
  &:hover {
    color: green;
  }
`
 
