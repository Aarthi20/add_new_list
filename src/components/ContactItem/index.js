import './index.css'; 

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }
  const starImgUrl = isFavorite ? 'https://tinyurl.com/4hvpe3az': 'https://tinyurl.com/4uz3fzbv'
  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" className="favorite-icon-container">
          <img
            src={starImgUrl}
            className="favorite-icon"
            alt="star"
            onClick={onClickFavoriteIcon}
          />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
