import React from "react";
import "./AmazonB.css";

const amazoneScript = function () {
  return '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=9&l=ez&f=ifr&linkID=ed19930a4ceab84638372e0e78905399&t=staticbgone-20&tracking_id=staticbgone-20" width="180" height="150" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>'
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

