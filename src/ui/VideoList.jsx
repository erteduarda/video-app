import React from "react";
import Video from "./Video";

const _list = [
    {
        id: 1,
        title: 'Grama',
        duration: 8,
        url: 'https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e0167b4c3a96.14254367.mp4',
        cover: 'https://images.freeimages.com/images/large-previews/67e/grama-1569574.jpg?fmt=webp&h=350'
    },
    {
        id: 2,
        title: 'Grama',
        duration: 8,
        url: 'https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e0167b4c3a96.14254367.mp4',
        cover: 'https://images.freeimages.com/images/large-previews/67e/grama-1569574.jpg?fmt=webp&h=350'
    },
    {
        id: 3,
        title: 'Grama',
        duration: 8,
        url: 'https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e0167b4c3a96.14254367.mp4',
        cover: 'https://images.freeimages.com/images/large-previews/67e/grama-1569574.jpg?fmt=webp&h=350'
    },
    {
        id: 4,
        title: 'Grama',
        duration: 8,
        url: 'https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e0167b4c3a96.14254367.mp4',
        cover: 'https://images.freeimages.com/images/large-previews/67e/grama-1569574.jpg?fmt=webp&h=350'
    }
]

export default function VideoList() {

    function onClick(video) {
        console.log(video);
    }
    return (
        <ul className="list">
            {_list.map(item => (
                <Video key={item.id} onClick={onClick} video={item} />
            ))}
        </ul>
    );
}