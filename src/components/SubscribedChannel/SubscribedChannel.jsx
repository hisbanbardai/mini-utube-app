import "./SubscribedChannel.css";

export default function SubscribedChannel({ image, name }) {
  return (
    <div className="subscribed-channel">
      <img src={image} alt="" />
      <span>{name}</span>
    </div>
  );
}
