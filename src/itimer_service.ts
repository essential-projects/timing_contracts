import {TimerRule} from './timer_rule';

import * as moment from 'moment';

export interface ITimerService {
  once(date: moment.Moment, eventName: string): Promise<string>;
  periodic(rule: TimerRule, eventName: string): Promise<string>;
  cancel(timerId: string): Promise<void>;
  restorePersistedJobs(): Promise<void>;
}
