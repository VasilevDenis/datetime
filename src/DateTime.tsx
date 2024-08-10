import DateTimePretty from './DateTimePretty';

function DateTime(props: { date: string }) {
    return (
        <p className="date">
            <DateTimePretty date={props.date} />
        </p>
    );
}

export default DateTime;
