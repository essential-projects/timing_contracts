import {IEntity} from '@essential-projects/core_contracts';
import {ITimingRule, TimerType} from './index';

export interface ITimerEntity extends IEntity {
  timerType: TimerType;
  timerIsoString: string;
  timerRule: ITimingRule;
  eventName: string;
  lastElapsed?: Date;
}
