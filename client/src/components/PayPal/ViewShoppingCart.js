import React from "react";



const ViewShoppingCart = () => (
  <div>
   {/* Start of View Cart Button Code */}
<form target="_self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
{/* If using a Business or Company Logo Graphic, include the "cpp_header_image" variable in your View Cart code. */}
<input type="hidden" name="cpp_header_image" value="https://yourwebsite.com/logo.jpg"></input> 
<input type="hidden" name="cmd" value="_cart"></input>
<input type="hidden" name="display" value="1"></input>
{/* Replace "business" value with your PayPal Email Address or Account ID */}
<input type="hidden" name="business" value="your email address"></input>
{/* Replace value with the web page you want the customer to return to */}
<input type="hidden" name="shopping_url" value="http://www.yourwebsite.com/Shop.html"></input>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
</form> 
</div>
);

export default ViewShoppingCart;
