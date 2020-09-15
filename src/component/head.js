const URL = "http://localhost:8080/users";
const getData = () => {
  fetch(`${URL}/1`, {
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
    .then((data) => {
      $("h2").html(`MY NAME IS ${data.name} AND THIS IS MY RESUME/CV`);
      $(".image-size").attr("src", data.avatar);
      $("#user-description").html(data.description)
    });
};

getData();
