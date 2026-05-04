document.addEventListener('DOMContentLoaded', () => {
  // Create Media Database
  const mediaArray = [
    {
      src: './videos/01.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 1 of 16'
    },
    {
      src: './videos/02.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 2 of 16'
    },
    {
      src: './videos/03.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 3 of 16'
    },
    {
      src: './videos/04.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 4 of 16'
    },
    {
      src: './videos/05.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 5 of 16'
    },
    {
      src: './videos/06.mp4',
      title: 'Seven Magic Mountains',
      description: 'Image 6 of 16'
    },
    {
      src: './videos/07.mp4',
      title: 'Bellagio Las Vegas',
      description: 'Image 7 of 16'
    },
    {
      src: './videos/08.mp4',
      title: 'Museum of Dream Space',
      description: 'Image 8 of 16'
    },
    {
      src: './videos/09.mp4',
      title: 'Downtown Container Park',
      description: 'Image 9 of 16'
    },
    {
      src: './videos/10.mp4',
      title: 'AREA15',
      description: 'Image 10 of 16'
    },
    {
      src: './videos/11.mp4',
      title: 'Boulder City Historic District',
      description: 'Image 11 of 16'
    },
    {
      src: './videos/12.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 12 of 16'
    },
    {
      src: './videos/13.mp4',
      title: 'University of Nevada, Las Vegas',
      description: 'Image 13 of 16'
    },
    {
      src: './videos/14.mp4',
      title: 'Las Vegas Arts District',
      description: 'Image 14 of 16'
    },
    {
      src: './videos/15.mp4',
      title: 'Fergusons Downtown',
      description: 'Image 15 of 16'
    },
    {
      src: './videos/16.mp4',
      title: 'Fremont East District',
      description: 'Image 16 of 16'
    }
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
