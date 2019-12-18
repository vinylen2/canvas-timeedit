module.exports = function(reservation, context_code) {
  let start_at = reservation.startdate + 'T' + reservation.starttime + 'Z';
  let end_at = reservation.enddate + 'T' + reservation.endtime + 'Z';

  return {
    context_code,
    title: reservation.title,
    location_name: reservation.location_name,
    location_address: reservation.location_address,
    description: reservation.description,
    start_at,
    end_at,
  }
}