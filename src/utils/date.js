import moment from 'moment/moment'

const timeCodeFormat = date => moment(date).format('MMMM Do YYYY, h:mm:ss a')

export default timeCodeFormat
