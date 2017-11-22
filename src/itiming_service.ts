import {ExecutionContext} from '@essential-projects/core_contracts';
import {ITimingRule} from './index';

import * as moment from 'moment';
import * as schedule from 'node-schedule';

export interface ITimingService {
  once(date: moment.Moment, eventName: string, context: ExecutionContext): Promise<string>;
  periodic(rule: ITimingRule, eventName: string, context: ExecutionContext): Promise<string>;
  // cron(cronString: string, eventName: string, context: ExecutionContext): Promise<string>;
  cancel(timerId: string, context: ExecutionContext): Promise<void>;
}
