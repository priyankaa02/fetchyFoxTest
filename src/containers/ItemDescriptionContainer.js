import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ItemDescription from '../components/ItemDescription'

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

const ItemDescriptionContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemDescription)
)

export default ItemDescriptionContainer
