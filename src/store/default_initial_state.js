import { today, getCachedStart, getCachedEnd } from '../utilities/calendar_helpers';

const date = today();

export const calendarManagerInit = {
  selected: date,
  view: 'month',
  date
};

export const eventsManagerInit = {
  events: [],
  eventSources: [],
  disabledEventTypes: [],
  eventsMetaData: {
    startQueryParam: 'start',
    endQueryParam: 'end',
    dateFormatter: 'YYYY-MM-DD',
    eventDateFormatter: 'YYYY-MM-DD',
    eventGroupByKey: 'date',
    cachedStart: getCachedStart(date),
    cachedEnd: getCachedEnd(date),
    eventDataTransform: (events, source) => events,
    dedupEvents: event => event.id
  }
};

export const calendarMetaDataInit = {
  dayViewEventLimit: 'none',
  weekViewEventLimit: 'none',
  monthViewEventLimit: 'none',
  dayViewEventLimitSize: 3,
  weekViewEventLimitSize: 3,
  monthViewEventLimitSize: 3,
  eventLimitClick: 'day'
};

export default {
  calendarManager: calendarManagerInit,
  eventsManager: eventsManagerInit,
  calendarMetaData: calendarMetaDataInit
};
