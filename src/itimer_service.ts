import {TimerRule} from './timer_rule';

import * as moment from 'moment';

export interface ITimerService {
  once(date: moment.Moment, eventName: string): string;
  periodic(rule: TimerRule, eventName: string): string;
  cancel(timerId: string): void;
}
