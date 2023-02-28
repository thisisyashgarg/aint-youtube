export async function getComments(
  setComments: Function,
  GET_COMMENTS_URL: string,
  videoID: string | null
) {
  const data = await fetch(GET_COMMENTS_URL + videoID);
  const json = await data.json();
  setComments(json.items);
  // setRelatedVideos(json);
}

export async function getRelatedVideos(
  setRelatedVideos: Function,
  RELATED_VIDEOS_URL: string,
  videoId: string | null
) {
  const data = await fetch(RELATED_VIDEOS_URL + videoId);
  const json = await data.json();
  setRelatedVideos(json.items);
}
