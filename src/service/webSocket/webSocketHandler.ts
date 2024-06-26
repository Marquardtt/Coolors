import { Stomp, IMessage } from "@stomp/stompjs";
import SockJS from "sockjs-client";

export const onConnect = (
  topic: string,
  handle: (message: IMessage) => void
) => {
  const socket = new SockJS("http://localhost:9999/putYourRouteHere");
  const client = Stomp.over(socket);
  client.connect({}, () => {
    client.subscribe(topic, (message) => {
      handle(message);
      message.ack();
    });
  });
  return client;
};