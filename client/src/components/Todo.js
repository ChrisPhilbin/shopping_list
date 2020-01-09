import React from 'react'
import PropTypes from 'prop-types'

const todo = ({onclick, completed, text}) => (
	<li
	onclick={onclick}
	style={{textDecoration: completed? 'line-through' : 'none'}}
	>
	{text}
	</li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo