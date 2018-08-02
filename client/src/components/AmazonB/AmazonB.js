import React from "react";
// import "./AmazonB.css";

const amazoneScript = function () {
  return '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=staticbgone-20&marketplace=amazon&region=US&placement=B0001M6K24&asins=B0001M6K24&linkId=276abe66e87217b07a70f78d777b4e8b&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=staticbgone-20&marketplace=amazon&region=US&placement=B0143IISD0&asins=B0143IISD0&linkId=0bcb16428943e529b1caf368357e371e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>'
}

var AmazoneAdd = () => ({

  render: function () {
    return (
      <div>
        <div className='advertisement'>
          <div dangerouslySetInnerHTML={{ __html: amazoneScript() }}></div>
        </div>
      </div>
    );
  }
});

export default AmazoneAdd;

