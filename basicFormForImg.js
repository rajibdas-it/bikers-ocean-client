const handleAddCategory = (event) => {
  event.preventDefault();
  const form = event.target;

  const image = form.image.files[0];
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=c777b9c0381e8aaf0936909d99159896`;

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgData) => {
      console.log(imgData);
    });
};
