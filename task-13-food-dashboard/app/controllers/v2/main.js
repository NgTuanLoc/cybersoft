import Services from "./../../models/v2/services.js";
import Food from "./../../models/v2/food.js";

const services = new Services();

const getHTMLElement = (id) => document.getElementById(id);

const clearInput = () => {
  getHTMLElement("tenMon").value = "";
  getHTMLElement("loai").value = "";
  getHTMLElement("giaMon").value = "";
  getHTMLElement("khuyenMai").value = "";
  getHTMLElement("tinhTrang").value = "";
  getHTMLElement("hinhMon").value = "";
  getHTMLElement("moTa").value = "";
};

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

// Add Item
const addItem = () => {
  getHTMLElement("btnThemMon").addEventListener("click", () => {
    const name = getHTMLElement("tenMon").value;
    const kind = getHTMLElement("loai").value;
    const price = getHTMLElement("giaMon").value;
    const discount = getHTMLElement("khuyenMai").value;
    const condition = getHTMLElement("tinhTrang").value;

    let image = "";

    if (getHTMLElement("hinhMon").files[0].name.length > 0) {
      image = getHTMLElement("hinhMon").files[0].name;
    }
    const description = getHTMLElement("moTa").value;

    const food = new Food(
      "",
      name,
      kind,
      price,
      discount,
      condition,
      image,
      description
    );
    food.calculateDiscountedPrice();

    services
      .addItem(food)
      .then(() => {
        document.getElementsByClassName("close")[0].click();
        getFoodList();
      })
      .catch((error) => {
        console.log(error);
      });
    clearInput();
  });
};

window.addItem = addItem;
