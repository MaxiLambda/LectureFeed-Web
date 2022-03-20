import {DefaultSocket} from "../defaultSocket/default.socket";
import {Question} from "../../model/question/question.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Participant} from "../../model/participant/participant.model";

@Injectable({
  providedIn: 'root'
})
export class ParticipantSocket extends DefaultSocket {

  public voteQuestionId(sessionId: number, questionId: number, vote: boolean){
    let path = vote ? `/participant/session/${sessionId}/question/${questionId}/rating/up`: `/participant/session/${sessionId}/question/${questionId}/rating/down`
    this.getStompClient().send(path, {});
  }

  public onUpdateQuestion(sessionId: number): Observable<Question>
  {
    return this.subscribe<Question>(`/participant/session/${sessionId}/question/onupdate`);
  }

  public onQuestion(): Observable<Question>
  {
    return this.subscribe<Question>('/admin/question')
  }

  public onJoinParticipant(sessionId: number): Observable<Participant>
  {
    return this.subscribe<Participant>(`/participant/session/${sessionId}/user/onjoin`);
  }

  public sendMood(sessionId: number, participantId: number, value: number){
    this.getStompClient().send(`/participant/session/${sessionId}/mood/${participantId}/${value}`, {});
  }

  public onUpdateMood(sessionId: number){
    return this.subscribe<number>(`/participant/session/${sessionId}/mood/onupdate`);
  }

}
