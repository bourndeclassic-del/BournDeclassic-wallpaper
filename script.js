function showCategory(categoryId) {
  const categories = document.querySelectorAll('.category');
  
  categories.forEach(cat => {cat.style.display = 'none';
     cat.classList.remove('active');
  
});

const selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
    selectedCategory.style.display = 'flex';
    selectedCategory.classList.add('active');
  }
}

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  const images = document.querySelectorAll('.category img');

  images.forEach(img => {
    const altText = img.alt.toLowerCase();
    if (altText.includes(query)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
});
function uploadWallpaper() {
  const fileInput = document.getElementById('fileInput');
  const message = document.getElementById('uploadMessage');

  if (!fileInput.files.length) {
    message.textContent = 'Please choose an image to upload.';
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const imageURL = event.target.result;
    const section = document.getElementById('wallpapers');
    section.innerHTML += `
      <div class="wallpaper">
        <img src="${imageURL}" alt="User Wallpaper">
        <a href="${imageURL}" download class="download-btn">Download</a>
      </div>
    `;
    message.textContent = '✅ Wallpaper uploaded successfully!';
  };

  reader.readAsDataURL(file);
}


window.onload = function(){
  showCategory('cars');
}
