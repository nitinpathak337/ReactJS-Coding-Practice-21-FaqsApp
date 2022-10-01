// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {list: props.faqsList}
  }

  componentDidMount() {
    const {list} = this.state

    const newList = list.map(eachItem => ({...eachItem, isExpand: false}))
    this.setState({list: newList})
  }

  expand = id => {
    const {list} = this.state
    const newList = list.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isExpand: !eachItem.isExpand}
      }
      return eachItem
    })
    this.setState({list: newList})
  }

  render() {
    const {list} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {list.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                details={eachItem}
                expand={this.expand}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
