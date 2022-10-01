// Write your code here.
import './index.css'

const FaqItem = props => {
  const {details, expand} = props
  const {id, questionText, answerText, isExpand} = details
  const alt = isExpand ? 'minus' : 'plus'
  const image = isExpand
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const onExpand = () => {
    expand(id)
  }
  return (
    <li className="list-item">
      <div className="question-button-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={onExpand}>
          <img alt={alt} src={image} />
        </button>
      </div>

      {isExpand ? (
        <>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </>
      ) : null}
    </li>
  )
}

export default FaqItem
