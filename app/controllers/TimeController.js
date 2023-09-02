import { AppState } from "../AppState.js"
import { timeService } from "../services/TimeService.js"
import { setText } from "../utils/Writer.js"

function _drawTime() {
  setText('time', AppState.time)
}

function _getTime() {
  timeService.getTime()
  // console.log(AppState.time)
}


export class TimeController {
  constructor() {
    console.log("time controller connected")
    setInterval(_getTime, 1000)
    AppState.on('time', _drawTime)
    _drawTime()
  }
}
