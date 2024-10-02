// Fetch the JSON data
fetch('http://localhost:3000/img/')
  .then(response => response.json())
  .then(data => {
    // Assuming the JSON structure is { "image": { "type": "image/png", "data": "base64string" } }
    const imageData = id.img;
    const imageType = id.img;

    // Create an img element
    const img = document.createElement('img');
    img.src = `data:${imageType};base64,${imageData}`;

    // Append the img element to the body or any other container
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error fetching the image:', error));
