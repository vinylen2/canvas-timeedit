module.exports = function(reservation, context_code) {
  return calendar_event = {
    context_code,
    title: reservation.columns[3],
    location_name: reservation.columns[1],
    description: reservation.columns[7],
    start_at: reservation.startdate + 'T' + reservation.starttime + 'Z',
    end_at: reservation.enddate + 'T' + reservation.endtime + 'Z',
  }
}