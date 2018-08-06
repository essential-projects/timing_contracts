import {TimerType} from './timer_type';
import {TimerRule} from './timer_rule';

import * as moment from 'moment';

export class Timer {
  public id: string;
  public type: TimerType;
  public expirationDate: moment.Moment;
  public rule: TimerRule;
  public eventName: string;
  public lastElapsed: Date;
}
