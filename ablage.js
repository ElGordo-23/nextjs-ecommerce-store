<div css={checkoutStyles}>
  <ul>
    {props.cartArray.map((car) => {
      return (
        <li key={`car-li-${car.id}`}>
          <img src={`../images/${car.id}.jpg`} alt="a Car" />
          <div>
            <p>
              {car.make} {car.model}
            </p>
            <p>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(` ${car.price} `)}
            </p>
          </div>
        </li>
      );
    })}
  </ul>
</div>;

<div className="CheckoutFields" css={checkoutFieldStyles}>
  <label>
    First Name
    <br />
    <input />
  </label>
  <label>
    Last Name
    <br />
    <input />
  </label>
  <label>
    Street
    <br />
    <input />
  </label>
  <label>
    Street Number
    <br />
    <input />
  </label>
  <label>
    Zip Code
    <br />
    <input />
  </label>
  <span>
    Country
    <br />
    <CountryDropdown />
  </span>
</div>;

<div css={lowerItemsStyle}>
  <button>Return to Cart</button>

  <div className="Total" css={grandTotalStyle}>
    <div>
      {new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(` ${grandTotal} `)}
    </div>
  </div>
</div>;
