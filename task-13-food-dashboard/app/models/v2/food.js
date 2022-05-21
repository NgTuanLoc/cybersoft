class Food {
  constructor(
    _id,
    _name,
    _kind,
    _price,
    _discount,
    _condition,
    _image,
    _description
  ) {
    this.id = _id;
    this.name = _name;
    this.kind = _kind;
    this.price = _price;
    this.discount = _discount;
    this.condition = _condition;
    this.image = _image;
    this.description = _description;
    this.discountedPrice = 0;
  }
  calculateDiscountedPrice() {
    this.discountedPrice = (this.price * (100 - this.discount)) / 100;
  }
}

export default Food;
