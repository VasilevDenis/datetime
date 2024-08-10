import DateTime from "./DateTime";

function Video(props: { url: string; date: string }) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTime date={props.date} />
        </div>
    );
}

export default Video;