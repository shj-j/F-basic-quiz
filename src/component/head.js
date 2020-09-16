const URL = "http://localhost:8080/users";
// TODO feedback: 请求和rander的逻辑耦合在一起了
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
      // TODO feedback: 不建议用标签选择器，未来新添加的标签都会被写入html
      $("h2").html(`MY NAME IS ${data.name} AND THIS IS MY RESUME/CV`);
      $(".image-size").attr("src", data.avatar);
      $("#user-description").html(data.description);
    });
};

getData();
