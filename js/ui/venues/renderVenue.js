export function renderVenue(container, venue) {
  container.innerHTML = "";
  const img = document.createElement("img");
  img.src = venue.media?.[0]?.url || "https://placehold.co/400x400";
  img.alt = venue.name;
  container.append(img);
}
