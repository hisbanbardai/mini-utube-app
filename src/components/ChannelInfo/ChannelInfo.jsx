import "./ChannelInfo.css";
import jack from "../../assets/jack.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { videoDataAtom } from "../../atoms/videoDataAtom";
import { channelDataAtom } from "../../atoms/channelDataAtom";
import { useEffect } from "react";
import axios from "axios";
import { converter } from "../../utility";
const apiKey = import.meta.env.VITE_API_KEY;

export default function ChannelInfo() {
  const data = useRecoilValue(videoDataAtom);
  const [channelData, setChannelData] = useRecoilState(channelDataAtom);

  useEffect(() => {
    async function fetchChannelData() {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data?.snippet.channelId}&key=${apiKey}`
      );

      setChannelData(res.data.items[0]);
    }

    fetchChannelData();
  }, [data, setChannelData]);

  return (
    <div className="channel-info-container">
      <div className="channel-info-header">
        <div className="channel-info-wrapper">
          <img
            className="channel-image"
            src={channelData?.snippet.thumbnails.default.url}
            alt=""
          />
          <div className="channel-text">
            <p className="channel-name">{channelData?.snippet.title}</p>
            <p className="channel-subscribers">
              {converter(channelData?.statistics.subscriberCount)} Subscribers
            </p>
          </div>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="video-description">{data?.snippet.description}</div>
      <hr />
    </div>
  );
}
