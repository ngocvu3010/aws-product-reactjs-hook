import React from 'react';
import {useDispatch} from 'react-redux';
import {priceStartChange, priceEndChange} from '../../redux/actions';

const prices = ["", 1, 80, 160, 240, 480, 1800, 4900];
const itemPrices = prices.map((item, index) => (
 {
    start: prices[index],
    end: prices[index + 1]
  }
))

function Price({priceStart, setPriceStart, priceEnd, setPriceEnd}) {
  const dispatch = useDispatch();

  const searchPrice = (start, end) => {
    setPriceStart(start);
    setPriceEnd(end);

    dispatch(priceStartChange(start));
    dispatch(priceEndChange(end));

  };

  return(
    <div id="prices" className="facet">
      <div className="ais-root ais-price-ranges">
        <div className="ais-price-ranges--header ais-header">
          <div className="facet-title">Prices</div>
        </div>
        <div className="ais-body ais-price-ranges--body">
          <div>
            <div className="ais-price-ranges--list nav nav-list">

             {
              itemPrices.map((item, index) => {
                if (item.start == '') {
                  return (
                    <div className="ais-price-ranges--item" key={index}>
                      <a className="ais-price-ranges--link" href="#" onClick={() => searchPrice('', item.end)}>
                        <div>≤ ${item.end}</div>
                      </a>
                    </div>
                  );
                } else if (item.end == undefined) {
                  return (
                    <div className="ais-price-ranges--item" key={index}>
                      <a className="ais-price-ranges--link" href="#" onClick={() => searchPrice(item.start, '')}>
                        <div>≥ ${item.start}</div>
                      </a>
                    </div>
                  );
                } else {
                  return(
                    <div className="ais-price-ranges--item" key={index}>
                      <a className="ais-price-ranges--link" href="#" onClick={() => searchPrice(item.start, item.end)}>
                        <div>${[item.start, item.end].join("-")}</div>
                      </a>
                    </div>
                  );
                }
              })
             }

            </div>
            <form className="ais-price-ranges--form"
              onSubmit={(e) => {
                e.preventDefault();
                searchPrice(priceStart, priceEnd)
                }
              }
            >
              <label className="ais-price-ranges--label">
                <span className="ais-price-ranges--currency">
                </span>
                <input
                  type="number"
                  className="ais-price-ranges--input"
                  value={priceStart}
                  onChange={(e) => setPriceStart(e.target.value)}
                />
              </label>
              <span className="ais-price-ranges--separator">
              </span>
              <label className="ais-price-ranges--label">
                <span className="ais-price-ranges--currency">
                </span>
                <input
                  type="number"
                  className="ais-price-ranges--input"
                  value={priceEnd}
                  onChange={(e) => setPriceEnd(e.target.value)}
                />
              </label>
              <button className="ais-price-ranges--button" type="submit">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price;
