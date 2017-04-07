import { IEntity } from '@process-engine-js/core_contracts';
import { ExecutionContext } from '@process-engine-js/core_contracts';
import * as moment from 'moment';
export interface ITimingRule {
    second?: number;
    minute?: number;
    hour?: number;
    date?: number;
    month?: number;
    year?: number;
    dayOfWeek?: number;
}
export interface ITimingService {
    once(date: moment.Moment, eventName: string, context: ExecutionContext): Promise<string>;
    periodic(rule: ITimingRule, eventName: string, context: ExecutionContext): Promise<string>;
    cancel(timerId: string, context: ExecutionContext): Promise<void>;
}
export interface ITimerEntity extends IEntity {
    timerType: TimerType;
    timerIsoString: string;
    timerRule: ITimingRule;
    eventName: string;
    lastElapsed?: Date;
}
export declare enum TimerType {
    once = 0,
    periodic = 1,
    cron = 2,
}
