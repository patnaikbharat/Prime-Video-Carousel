/* eslint-disable jsx-a11y/control-has-associated-label */
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />}
      className="popup-container"
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="react-icon" />
          </button>
          <div className="player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
