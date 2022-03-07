import {toDate, format} from 'date-fns'

//An easy way to format date
//Prop is the timestamp found in API
export default function Date({timestamp}) {
    const date = toDate(timestamp*1000)
    return <time dateTime={timestamp}>{format(date, 'do LLLL y, HH:mm:ss')}</time>
}