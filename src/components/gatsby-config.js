module.exports = {
	plugins: [
	  // other gatsby plugins
	  // ...
	  {
		resolve: `gatsby-source-google-calendar`,
		options: {
		  calendarIds: [
			'https://calendar.google.com/calendar/embed?src=okdq5ar7qo7tauol6miki94rhs%40group.calendar.google.com',
		  ],
		  // options to retrieve the next 10 upcoming events
		  timeMin: (new Date()).toISOString(),
		  maxResults: 10,
		  singleEvents: true,
		  orderBy: 'startTime',
		}
	  },
	],
  }
  