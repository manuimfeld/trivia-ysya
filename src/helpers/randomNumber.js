const randomNumber = (videosList) => {
  let videosLength = videosList.length;
  let number = Math.floor(Math.random() * videosLength);

  return number;
};

export default randomNumber;
