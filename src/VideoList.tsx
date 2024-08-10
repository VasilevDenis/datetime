import Video from "./Video";

function VideoList(props: { list: Array<{ url: string; date: string }> }) {
    return (
        <div>
            {props.list.map((item, index) => (
                <Video key={index} url={item.url} date={item.date} />
            ))}
        </div>
    );
}

export default VideoList;