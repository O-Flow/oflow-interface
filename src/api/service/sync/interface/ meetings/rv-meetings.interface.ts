import {MeetingStatus} from "@/api/service/main/meeting/interface/meeting-status";
import {ShareMode} from "@/api/service/main/meeting/interface/share-mode";

export default interface RvMeetings {
  meetingId: string
  status: MeetingStatus
  startTime: number
  endTime: number
  current: {
    presenter: string
    state: {
      personNumber: number
    }
    config: {
      allFollow: boolean
      clickShareMode: ShareMode
      cursorShareMode: ShareMode
    }
    visitors: string[]
  }
}