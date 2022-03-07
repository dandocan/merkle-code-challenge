import {toDate, format} from 'date-fns'

export default function Date({timestamp}) {
    const date = toDate(timestamp*1000)
    return <time dateTime={timestamp}>{format(date, 'do LLLL y, HH:mm:ss')}</time>
}