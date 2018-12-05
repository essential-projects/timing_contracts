import {TimerRule} from './timer_rule';

import * as moment from 'moment';

/**
 * Handles the creation, execution and destruction of timers.
 */
export interface ITimerService {

  /**
   * Creates a new timer that will run once and raise the given event when
   * expired.
   *
   * @param   date      Either a duration or a date. This determines when the
   *                    timer is to expire.
   * @param   eventName The name of the event to raise after the timer has
   *                    expired.
   * @returns           The ID of the created timer.
   */
  once(date: moment.Moment, eventName: string): string;

  /**
   * Creates a new timer that will run periodically, based on the given rule
   * and raise the given event each time it has elapsed.
   *
   * @param rule      The rule by which the timer is to run.
   * @param eventName The name of the event to raise when the timer has
   *                  elapsed.
   * @returns         The ID of the created timer.
   */
  periodic(rule: TimerRule, eventName: string): string;

  /**
   * Cancels the timer with the given id.
   *
   * @param timerId The id of the timer to cancel.
   */
  cancel(timerId: string): void;
}
