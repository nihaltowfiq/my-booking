export const breadcrumbsData = [
  { link: '#', value: 'Home' },
  { link: '#', value: 'Booking History' },
  { link: '#', value: 'Flight' },
  { link: '#', value: 'STFL17121182045413' },
];

export const flightData = {
  from: 'DAC',
  to: 'JFK',
  type: 'Round Trip',
  date: '25 Mar - 4 Apr 2023',
  stop: '1 Stop',
  duration: '33h 20m',
  details: [
    {
      title: 'Departure from Dhaka',
      duration: '12 hr 20 min',
      from: 'DAC',
      to: 'DXB',
      flightNo: 'TUR467',
      plane: 'Airbus Industrie 737-800-738',
      coach: 'ECONOMY-Y (O)',
      airline: 'Turkish Airlines',
      startTime: '07:30 PM',
      endTime: '08:50 AM',
      startDate: '28 Mar, Friday',
      endDate: '29 Mar, Saturday',
      airport: 'Hazrat Shahjalal International Airport',
      terminal: 'Terminal 1',
      notice:
        'Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality',
      arrived: false,
    },
    {
      title: 'Departure from Dhaka',
      duration: '12 hr 20 min',
      from: 'DAC',
      to: 'DXB',
      airline: 'Turkish Airlines',
      plane: 'Airbus Industrie 737-800-738',
      coach: 'ECONOMY-Y (O)',
      flightNo: 'TUR467',
      startTime: '07:30 PM',
      startDate: '28 Mar, Friday',
      endTime: '08:50 AM',
      endDate: '29 Mar, Saturday',
      airport: 'Dubai International Airport',
      terminal: '',
      notice: '',
      arrived: false,
    },
    {
      title: 'Destination at New York',

      duration: '12 hr 20 min',
      from: 'DAC',
      to: 'DXB',
      airline: 'Turkish Airlines',
      plane: 'Airbus Industrie 737-800-738',
      coach: 'ECONOMY-Y (O)',
      flightNo: 'TUR467',
      startTime: '07:30 PM',
      startDate: '28 Mar, Friday',
      endTime: '08:50 AM',
      endDate: '29 Mar, Saturday',
      airport: 'John F Kennedy International Airport',
      terminal: 'Terminal 4',
      notice: '',
      arrived: true,
    },
  ],
};
