import Services from "./../../models/v2/services.js";
import Food from "./../../models/v2/food.js";

const services = new Services();

const getHTMLElement = (id) => document.getElementById(id);

const clearModalInput = () => {
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
        <td>
        <img src="./../../../assets/img/${item.image}"/>
        </td>
        <td>${item.kind === "loai1" ? "Chay" : "Mặn"}</td>
        <td>${item.price}</td>
        <td>${item.discount}</td>
        <td>${item.discountedPrice}</td>
        <td>${item.condition === "1" ? "Hết" : "Còn"}</td>
        <td>
            <button class="btn btn-info" onclick="openEditModalById(${
              item.id
            })" data-toggle="modal"
            data-target="#exampleModal">Edit</button>
            <button class="btn btn-danger" onclick="deleteItem(${
              item.id
            })">Delete</button>
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
getHTMLElement("btnThem").addEventListener("click", () => {
  getHTMLElement("btnCapNhat").classList.add("d-none");
});

const addItem = () => {
  getHTMLElement("btnThemMon").addEventListener("click", () => {
    const name = getHTMLElement("tenMon").value;
    const kind = getHTMLElement("loai").value;
    const price = getHTMLElement("giaMon").value;
    const discount = getHTMLElement("khuyenMai").value;
    const condition = getHTMLElement("tinhTrang").value;

    let image = "";

    if (getHTMLElement("hinhMon").files.length > 0) {
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
    clearModalInput();
  });
};

window.addItem = addItem;

// Edit Item
const openEditModalById = (id) => {
  getHTMLElement("exampleModalLabel").innerHTML = "Sửa Món Ăn";
  getHTMLElement("btnThemMon").classList.add("d-none");

  services
    .getFoodById(id)
    .then((result) => {
      const { id, name, kind, price, discount, condition, image, description } =
        result.data;

      getHTMLElement("btnCapNhat").setAttribute(
        "onclick",
        `editItem(${id},"${image}")`
      );
      getHTMLElement("foodID").value = id;
      getHTMLElement("tenMon").value = name;
      getHTMLElement("loai").value = kind;
      getHTMLElement("giaMon").value = price;
      getHTMLElement("khuyenMai").value = discount;
      getHTMLElement("tinhTrang").value = condition;
      getHTMLElement("moTa").value = description;
    })
    .catch((error) => {
      console.log(error);
    });
};
window.openEditModalById = openEditModalById;

const editItem = async (id, previousImage = "") => {
  const name = getHTMLElement("tenMon").value;
  const kind = getHTMLElement("loai").value;
  const price = getHTMLElement("giaMon").value;
  const discount = getHTMLElement("khuyenMai").value;
  const condition = getHTMLElement("tinhTrang").value;

  let image = previousImage;

  if (getHTMLElement("hinhMon").files.length > 0) {
    image = getHTMLElement("hinhMon").files[0].name;
  }
  const description = getHTMLElement("moTa").value;

  const food = new Food(
    id,
    name,
    kind,
    price,
    discount,
    condition,
    image,
    description
  );
  food.calculateDiscountedPrice();

  const result = await services.getFoodById(id);
  if (!food.hinhMon) {
    //Nạp lại hình món cũ vào food.hinhMon
    food.hinhMon = result.data.hinhMon;
  }
  const data = await services.editItemById(food);
  if (data.status === 200) {
    document.getElementsByClassName("close")[0].click();
    getFoodList();
  }
  clearModalInput();
};

window.editItem = editItem;
