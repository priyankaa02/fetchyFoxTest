import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

const HomeContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)

export default HomeContainer
