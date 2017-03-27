import { IEntity } from '@process-engine-js/core_contracts';
import { ExecutionContext } from '@process-engine-js/core_contracts';
export interface ITimingRule {
}
export interface ITimingService {
    once(date: Date, eventName: string, context: ExecutionContext): Promise<string>;
    cron(cronString: string, eventName: string, context: ExecutionContext): Promise<string>;
    cancel(timerId: string, context: ExecutionContext): Promise<void>;
}
export interface ITimerEntity extends IEntity {
    timerType: TimerType;
    timerValue: string;
    eventName: string;
    lastElapsed?: Date;
}
export declare enum TimerType {
    once = 0,
    periodic = 1,
    cron = 2,
}
