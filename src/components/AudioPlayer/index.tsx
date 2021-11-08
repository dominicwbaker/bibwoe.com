/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import * as React from "react"
import ReactAudioPlayer from "react-audio-player";
import moses from '../../static/audio/book-of-moses.mp3'

const AudioPlayer: React.FC = () => (  
  <Box>
    <div style={styles}>
      <h2 onClick={alerting}>Book of Moses</h2>
      <ReactAudioPlayer
        src={moses}
        autoPlay
        controls
      />
    </div>
  </Box>
)

  export default AudioPlayer