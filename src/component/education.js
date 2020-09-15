const URL = "http://localhost:8080/users";

const educations = (data) => {
  $("ul").append(`<li class="education-section">
  <p class="year">${data.year}</p>
  <div class="education-detail">
  <p>${data.title}</p>
  <p>${data.description}></p>
  </div>
  </li>`);
};

const getEducationData = () => {
  fetch(`${URL}/1/educations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return Promise.reject(new Error(response.statusText));
    })
    .then((result) => {
      result.map((data) => educations(data));
    });
};
getEducationData();
