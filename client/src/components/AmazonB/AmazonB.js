import React from "react";
import "./AmazonB.css";

var AmazoneAdd = () => ({
  amazoneScript: function() {
    return '<div class="alignleft"> <script type="text/javascript"> amzn_assoc_ad_type = "banner"; amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "US"; amzn_assoc_placement = "assoc_banner_placement_default"; amzn_assoc_campaigns = "kuft"; amzn_assoc_banner_type = "category"; amzn_assoc_p = "48"; amzn_assoc_isresponsive = "false"; amzn_assoc_banner_id = ID; amzn_assoc_width = "728"; amzn_assoc_height = "90"; amzn_assoc_tracking_id = "staticbgone-20"; amzn_assoc_linkid = "c4ff4fad646f34f210308ce0f8c92ca9"; </script> <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script> </div>'
  },
  render: function() {
    return (
		<div>
	  
    <div className="col-3 amazonAdd float-right">
		  

   Note: I would like to add a Amazon ad here and if you go to AmazonB.js I have script that I got from Amazon.
		
	
    </div>
        <div className='advertisement'>
          <div dangerouslySetInnerHTML={{__html: this.amazoneScript()}}></div> 
        </div>
      </div>
    );
  }
});

export default AmazoneAdd;

