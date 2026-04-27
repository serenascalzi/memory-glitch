document.addEventListener('DOMContentLoaded', () => {
  // Create Media Database
  const mediaArray = [
    {
      src: './videos/01.mp4',
      title: 'Media Title',
      description: 'Media Description',
      poster: './images/01.jpg'
    }, // Remove comma after last item in array!
  ];

  // Generate Random Index Number
  const randomIndex = Math.floor(Math.random() * mediaArray.length);

  // Select Random Media Object
  const selectedMedia = mediaArray[randomIndex];

  // Create Figure Element for HTML
  const figure = document.createElement('figure');

  // Create Video Element and Add Settings
  const video = document.createElement('video');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.controls = false;
  video.poster = selectedMedia.poster;

  // Create Source Element and Add Information
  const source = document.createElement('source');
  source.src = selectedMedia.src;
  source.type = 'video/mp4';

  // Build Video
  video.appendChild(source);

  // Create Caption Element
  const figcaption = document.createElement('figcaption');

  // Create Heading Element and Add Title
  const title = document.createElement('h3');
  title.textContent = selectedMedia.title;

  // Create Paragraph Element and Add Description
  const description = document.createElement('p');
  description.textContent = selectedMedia.description;

  // Build Caption
  figcaption.appendChild(title);
  figcaption.appendChild(description);

  // Build Figure
  figure.appendChild(video);
  figure.appendChild(figcaption);

  // Add Figure Element to HTML
  document.getElementById('photography').appendChild(figure);
});
