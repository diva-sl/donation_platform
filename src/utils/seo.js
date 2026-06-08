export const updateSEO = ({ title, description }) => {
  document.title = title || "Mysticpace Donation Platform";

  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }
};
