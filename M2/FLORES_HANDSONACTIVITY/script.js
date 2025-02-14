document.getElementById('getDogBtn').addEventListener('click', fetchDogImage);

const apiKey = 'live_5mzlPSazrAmHoPDgc9iywTCasucMsbvR2YUlTn18PHqQfyPkq0BOFMVEBylMSiD3';  // Your API key

function fetchDogImage() {
  // Make an API request to get a random dog image, with the API key in the headers
  fetch('https://api.thedogapi.com/v1/images/search', {
    headers: {
      'x-api-key': apiKey  // Add your API key here
    }
  })
    .then(response => response.json())
    .then(data => {
      // Get the URL of the dog image from the API response
      const dogImageUrl = data[0].url;

      // Update the image source with the new dog image
      document.getElementById('dogImage').src = dogImageUrl;
    })
    .catch(error => {
      console.error('Error fetching dog image:', error);
    });
}

// Fetch a dog image when the page loads
fetchDogImage();
