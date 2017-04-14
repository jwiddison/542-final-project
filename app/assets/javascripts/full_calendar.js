var initialize_calendar;
initialize_calendar = function() {
  $('.calendar').each(function(){
    var calendar = $(this);
    calendar.fullCalendar({
      height: 'auto',
      header: {
        left: 'title',
        center: 'agendaDay,agendaWeek,month',
        right: 'prev,today,next'
      },
      titleFormat: 'MMMM YYYY',
      defaultView: 'agendaWeek',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      allDaySlot: false,
      events: '/events.json',
      columnFormat: {
        week: 'ddd D'
      },
      slotLabelFormat: 'h (:mm)A',
      allDayText: 'All-Day',
      slotDuration: '00:30:00',
      minTime: '07:00:00',
      maxTime: '23:00:00',
      windowResizeDelay: '0',

      select: function(start, end) {
        $.getScript('/events/new', function() {
          $('#event_date_range').val(moment(start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYYY HH:mm"))
          date_range_picker();
          $('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
        });

        calendar.fullCalendar('unselect');
      },

      eventDrop: function(event, delta, revertFunc) {
        event_data = {
          event: {
            id: event.id,
            start: event.start.format(),
            end: event.end.format()
          }
        };
        $.ajax({
            url: event.update_url,
            data: event_data,
            type: 'PATCH'
        });
      },

      eventClick: function(event, jsEvent, view) {
        $.getScript(event.edit_url, function() {
          $('#event_date_range').val(moment(event.start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(event.end).format("MM/DD/YYYY HH:mm"))
          date_range_picker();
          $('.start_hidden').val(moment(event.start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(event.end).format('YYYY-MM-DD HH:mm'));
        });
      }
    });
  })
};
$(document).on('turbolinks:load', initialize_calendar);
