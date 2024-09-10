import axios from "axios";
import { atomFamily, selector, selectorFamily } from "recoil";
const apiKey = import.meta.env.VITE_API_KEY;

export const categoryBasedVideosAtomFamily = atomFamily({
  key: "categoryBasedVideosAtomFamily",
  default: selectorFamily({
    key: "categoryBasedVideosSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${id}&key=${apiKey}`
        );
        return res.data.items;
      },
  }),
});
