import Services from "./../../models/v2/services.js";

const services = new Services();

const getHTMLElement = (id) => document.getElementById(id);

const renderHTML = (data) => {
  const content = data.reduce((contentHTML, item) => {
    return (contentHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.kind}</td>
        <td>${item.price}</td>
        <td>${item.discount}</td>
        <td>${item.discountedPrice}</td>
        <td>${item.condition}</td>
        <td>
            <button class="btn btn-info">Edit</button>
            <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
        </td>
      </tr>
      `);
  }, "");
  getHTMLElement("tbodyFood").innerHTML = content;
};

// Get food list
const getFoodList = () => {
  services
    .fetchData()
    .then((result) => {
      renderHTML(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getFoodList();

// Delete Item
const deleteItem = (id) => {
  services
    .deleteFoodById(id)
    .then(() => getFoodList())
    .catch((error) => console.log(error));
};

window.deleteItem = deleteItem;
