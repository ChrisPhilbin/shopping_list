import { connect } from 'react-redux'
import { toggleTodos } from '../actions'
import TodoList from '../components/TogoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
    	case VisibilityFilters.SHOW_COMPLETED:
      		return todos.filter(t => t.completed)
    	case VisibilityFilters.SHOW_ACTIVE:
      		return todos.filter(t => !t.completed)
    	default:
      		throw new Error('Unknown filter: ' + filter)
	}
}

