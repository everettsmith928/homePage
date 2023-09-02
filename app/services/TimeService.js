import { AppState } from "../AppState.js"

class TimeService {

  getTime() {
    // re-declares our appstate so listener fires every second
    AppState.time = new Date().toLocaleTimeString()
  }

}

export const timeService = new TimeService