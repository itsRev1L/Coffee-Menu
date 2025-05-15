import { Container, Row, Col, Card } from "react-bootstrap";
import "./MenuList.css";

const MenuList = ({
  items = [],
  searchText = "",
  addToCart,
  cartItems,
  removeFromCart,
}) => {
  const filteredFoods = items.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <Container style={{ paddingBottom: "90px" }}>
      <Row className="rtl">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item, index) => (
            <Col key={item.id} md={12} xs={12} className="mb-3">
              {(index === 0 ||
                filteredFoods[index - 1].category !== item.category) && (
                <h2
                  id={`category-${item.category}`}
                  className="category-header"
                >
                  {item.category}
                </h2>
              )}

              <Card className="menu-item">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="menu-text" style={{ flex: 1 }}>
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.description}</div>
                    <div className="price">{item.price}</div>
                    <button
                      className={`btn btn-sm ${
                        isInCart(item.id)
                          ? "menu-button-remove"
                          : "menu-button-add"
                      }`}
                      onClick={() =>
                        isInCart(item.id)
                          ? removeFromCart(item.id)
                          : addToCart(item)
                      }
                      style={{ width: "100px" }}
                    >
                      {isInCart(item.id) ? "حذف" : "افزودن"}
                    </button>
                  </div>

                  <div className="image-box" style={{ marginLeft: "15px" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="food-image"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>هیچ غذایی مطابق جستجو یافت نشد.</p>
        )}
      </Row>
    </Container>
  );
};

export default MenuList;
