import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

const CartContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
)

export default CartContainer
