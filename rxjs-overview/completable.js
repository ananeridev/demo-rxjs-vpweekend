const START_ROUND_TRIPS = "START_ROUND_TRIPS";
const END_ROUND_TRIPS = "END_ROUND_TRIPS";

const endRoundTrip = (count) => ({ type: END_ROUND_TRIPS, payload: { count } });

const roundTripEpic = (action$) =>
  action$
    .ofType(START_ROUND_TRIPS)
    .concatMap((action) =>
      Observable.concat(
        Completable.from(action$.ofType(PONG).take(action.payload.count)),
        Observable.of(endRoundTrip(action.payload.count))
      )
    );
