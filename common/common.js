var d = new Date();
  d.setFullYear(2019);
  d.setMonth(10);
  d.setDate(31);
  d.setHours(9);
  d.setMinutes(9);
  d.setSeconds(34);



  //jQuery example
  $('#simply-countdown-losange').simplyCountdown({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      enableUtc: false
  });

  $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show');
  });
