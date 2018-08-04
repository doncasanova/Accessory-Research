import React from "react";



const ShoppingCart = () => (
  <div>
    <img className="m-2" src="http://accessoryresearch.com/Film%20Cleaner.JPG" height="200px" alt="Film Cleaner"></img>
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">


      <input type="hidden" name="business" value="kin@kinskards.com"></input>

      <input type="hidden" name="cmd" value="_cart"></input>
      <input type="hidden" name="add" value="1"></input>


      <input type="hidden" name="item_name" value="Static B Gone Film Cleaner"></input>
      <input type="hidden" name="amount" value="40.00"></input>
      <input type="hidden" name="currency_code" value="USD"></input>


      <input type="image" name="submit"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
        alt="Add to Cart"></input>
      <img alt="" width="1" height="1"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"></img>

      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
    </form>

  </div>
);

export default ShoppingCart;
