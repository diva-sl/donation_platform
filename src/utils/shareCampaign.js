export const shareCampaign = (title, url) => {
  if (navigator.share) {
    navigator.share({
      title,
      url,
    });
  } else {
    navigator.clipboard.writeText(url);

    alert("Campaign link copied successfully.");
  }
};
