import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Items from '../components/Items'

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

const ItemsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Items)
)

export default ItemsContainer
