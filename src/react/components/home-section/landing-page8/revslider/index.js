import React from "react";
import { RevSlider } from "../../../xamin";
import { initRevSlider6 } from "../../../../config/plugins";
import Image from "next/image";

import $ from "jquery";

import img from "../../../../public/assets/revslider/assets_slider4/xamin-demo8-01.jpg";
import img1 from "../../../../public/assets/revslider/assets_slider4/xamin-dom08-02.png";
import img2 from "../../../../public/assets/revslider/assets_slider4/xamin-dom08-02.png";
import img3 from "../../../../public/assets/revslider/assets_slider4/xamin-dom08-02.png";
import img4 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-03.png";
import img5 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-03.png";
import img6 from "../../../../public/assets/revslider/assets_slider4/xamin-dom08-02.png";
import img7 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-04.png";
import img8 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-05.png";
import img9 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-05.png";
import img10 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-07.png";
import img11 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-06.png";
import img12 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-08.png";
import img13 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-09.png";
import img14 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-10.png";
import img15 from "../../../../public/assets/revslider/assets_slider4/xamin-d8-12.png";

const Index = () => {
  React.useEffect(() => {
    if (!tpj("#rev_slider_6_1").hasClass("revslider-initialised")) {
      $("#rev_slider_6_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: 1600,
          gridheight: 900,
          minHeight: "",
          autoHeight: true,
          lazyType: "smart",
          spinner: "spinner0",
          editorheight: [900, 768, 960, 720],
          responsiveLevels: [1240, 1024, 778, 480],
          navigation: {
            mouseScrollNavigation: false,
            touch: {
              touchenabled: true,
            },
          },
          parallax: {
            levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            type: "mouse",
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid: true,
          },
        });
    }
  }, []);
  return (
    <>
      <div>
        <RevSlider revId={"rev_slider_6_1"}>
          <rs-slide
            data-key="rs-6"
            data-title="Slide"
            data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
          >
            <Image
              src={img}
              title="xamin-demo8-01.jpg"
              width="1600"
              height="812"
              className="rev-slidebg"
              data-no-retina
            />

            <h2
              id="slider-6-slide-6-layer-3"
              className="rs-layer"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:218px;y:b;yo:233px;"
              data-text="w:normal;s:80;l:90;fw:900;"
              data-frame_1="e:Power4.easeInOut;st:600;sp:1200;sR:600;"
              data-frame_1_sfx="se:blocktoright;"
              data-frame_999="o:0;st:w;sR:7200;"
              style={{
                zIndex: 8,
                fontFamily: "Lato",
                textTransform: "uppercase",
              }}
            >
              User
            </h2>

            <h1
              id="slider-6-slide-6-layer-4"
              className="rs-layer"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:214px;y:b;yo:128px;"
              data-text="w:normal;s:120;l:90;fw:900;"
              data-frame_1="e:Power4.easeInOut;st:600;sp:1200;sR:600;"
              data-frame_1_sfx="se:blocktoright;"
              data-frame_999="o:0;st:w;sR:7200;"
              style={{
                zIndex: 9,
                fontFamily: "Lato",
                textTransform: "uppercase",
              }}
            >
              Behaviour
            </h1>
            <h3
              id="slider-6-slide-6-layer-7"
              className="rs-layer"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:769px;y:b;yo:62px;"
              data-text="w:normal;s:30;l:50;fw:900;"
              data-frame_1="e:Power4.easeInOut;st:600;sp:1200;sR:600;"
              data-frame_1_sfx="se:blocktoright;"
              data-frame_999="o:0;st:w;sR:7200;"
              style={{
                zIndex: 10,
                fontFamily: "Lato",
                textTransform: "uppercase",
              }}
            >
              ANALYSIS
            </h3>
            <rs-layer
              id="slider-6-slide-6-layer-8"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:-384px;y:c;yo:17px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:1900;sp:1000;sR:1900;"
              data-frame_999="o:0;st:w;sR:6100;"
              data-loop_0="o:0;"
              data-loop_999="sp:3000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 14, fontFamily: "Roboto" }}
            >
              <Image src={img1} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-9"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:101px;y:c;yo:17px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:1800;sp:1000;sR:1800;"
              data-frame_999="o:0;st:w;sR:6200;"
              data-loop_0="o:0;"
              data-loop_999="sp:5000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 13, fontFamily: "Roboto" }}
            >
              <Image src={img2} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-10"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:209px;y:b;yo:209px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:1700;sp:1000;sR:1700;"
              data-frame_999="o:0;st:w;sR:6300;"
              data-loop_0="o:0;"
              data-loop_999="sp:1500;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 12, fontFamily: "Roboto" }}
            >
              <Image src={img3} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-11"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:-84px;y:c;yo:121px;"
              data-text="w:normal;"
              data-dim="w:44px;h:44px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2100;sp:1000;sR:2100;"
              data-frame_999="o:0;st:w;sR:5900;"
              data-loop_0="o:0;"
              data-loop_999="sp:1500;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 16, fontFamily: "Roboto" }}
            >
              <Image src={img4} width="44" height="44" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-12"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:389px;y:c;yo:121px;"
              data-text="w:normal;"
              data-dim="w:44px;h:44px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
              data-frame_999="o:0;st:w;sR:6000;"
              data-loop_0="o:0;"
              data-loop_999="sp:4000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 15, fontFamily: "Roboto" }}
            >
              <Image src={img5} width="44" height="44" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-13"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:107px;y:241px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:1600;sp:1000;sR:1600;"
              data-frame_999="o:0;st:w;sR:6400;"
              data-loop_0="o:0;"
              data-loop_999="sp:8000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 11, fontFamily: "Roboto" }}
            >
              <Image src={img6} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-14"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:204px;y:c;yo:116px;"
              data-text="w:normal;"
              data-dim="w:76px;h:76px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2200;sp:1000;sR:2200;"
              data-frame_999="o:0;st:w;sR:5800;"
              data-loop_0="o:0;"
              data-loop_999="sp:1500;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 17, fontFamily: "Roboto" }}
            >
              <Image src={img7} width="76" height="76" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-15"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:203px;y:c;yo:121px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2400;sp:1000;sR:2400;"
              data-frame_999="o:0;st:w;sR:5600;"
              data-loop_0="o:0;"
              data-loop_999="sp:7000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 19, fontFamily: "Roboto" }}
            >
              <Image src={img8} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-16"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:492px;y:c;yo:-87px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.9;sY:0.9;"
              data-frame_1="st:2300;sp:1000;sR:2300;"
              data-frame_999="o:0;st:w;sR:5700;"
              data-loop_0="o:0;"
              data-loop_999="sp:2000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 18, fontFamily: "Roboto" }}
            >
              <Image src={img9} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-17"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:1243px;y:210px;"
              data-text="w:normal;"
              data-dim="w:76px;h:76px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2500;sp:1000;sR:2500;"
              data-frame_999="o:0;st:w;sR:5500;"
              data-loop_0="o:0;"
              data-loop_999="sp:10000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 20, fontFamily: "Roboto" }}
            >
              <Image src={img10} width="76" height="76" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-18"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:396px;y:241px;"
              data-text="w:normal;"
              data-dim="w:28px;h:28px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2600;sp:1000;sR:2600;"
              data-frame_999="o:0;st:w;sR:5400;"
              data-loop_0="o:0;"
              data-loop_999="sp:5000;e:Sine.easeInOut;yyf:t;"
              style={{ zIndex: 21, fontFamily: "Roboto" }}
            >
              <Image src={img11} width="28" height="28" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-20"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:-91px;y:c;yo:11px;"
              data-text="w:normal;"
              data-dim="w:264px;h:264px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2700;sp:1000;sR:2700;"
              data-frame_999="o:0;st:w;sR:5300;"
              data-loop_999="rZ:360;sp:30000;"
              style={{ zIndex: 22, fontFamily: "Roboto" }}
            >
              <Image src={img12} width="264" height="264" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-21"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:-13px;y:c;yo:120px;"
              data-text="w:normal;"
              data-dim="w:264px;h:264px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2800;sp:1000;sR:2800;"
              data-frame_999="o:0;st:w;sR:5200;"
              data-loop_999="rZ:360;sp:30000;"
              style={{ zIndex: 24, fontFamily: "Roboto" }}
            >
              <Image src={img13} width="264" height="264" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-22"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:r;xo:112px;y:c;yo:-3px;"
              data-text="w:normal;"
              data-dim="w:196px;h:184px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2900;sp:1000;sR:2900;"
              data-frame_999="o:0;st:w;sR:5100;"
              style={{ zIndex: 26, fontFamily: "Roboto" }}
            >
              <Image src={img14} width="196" height="184" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-23"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:701px;y:259px;"
              data-text="w:normal;"
              data-dim="w:226px;h:184px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:3010;sp:1000;sR:3010;"
              data-frame_999="o:0;st:w;sR:4990;"
              style={{ zIndex: 27, fontFamily: "Roboto" }}
            >
              <Image src={img15} width="226" height="184" data-no-retina />
            </rs-layer>
            <h5
              id="slider-6-slide-6-layer-24"
              className="rs-layer"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:743px;y:271px;"
              data-text="w:normal;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:3200;sp:1000;sR:3200;"
              data-frame_999="o:0;st:w;sR:4800;"
              style={{ zIndex: 29, fontFamily: "Roboto" }}
            >
              Measuring For
            </h5>
            <rs-layer
              id="slider-6-slide-6-layer-25"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:r;xo:159px;y:c;yo:-71px;"
              data-text="w:normal;"
              data-frame_0="sX:0.9;sY:0.9;"
              data-frame_1="st:3100;sp:1000;sR:3100;"
              data-frame_999="o:0;st:w;sR:4900;"
              style={{ zIndex: 28, fontFamily: "Roboto" }}
            >
              Identify
            </rs-layer>
            <h4
              id="slider-6-slide-6-layer-26"
              className="rs-layer"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:c;xo:-9px;y:c;yo:-134px;"
              data-text="w:normal;s:28;l:38;fw:700;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:3400;sp:1000;sR:3400;"
              data-frame_999="o:0;st:w;sR:4600;"
              style={{ zIndex: 31, fontFamily: "Lato" }}
            >
              Success
            </h4>
            <h4
              id="slider-6-slide-6-layer-27"
              className="rs-layer"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:r;xo:157px;y:c;yo:-38px;"
              data-text="w:normal;s:28;l:38;fw:700;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:3300;sp:1000;sR:3300;"
              data-frame_999="o:0;st:w;sR:4700;"
              style={{ zIndex: 30, fontFamily: "Lato" }}
            >
              Problems
            </h4>
            <rs-layer
              id="slider-6-slide-6-layer-31"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:-42px;y:245px;"
              data-text="w:normal;"
              data-btrans="rZ:-90;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:3600;sp:1000;sR:3600;"
              data-frame_999="o:0;st:w;sR:4400;"
              style={{
                zIndex: 33,
                fontFamily: "Roboto",
                textTransform: "capitalize",
              }}
            >
              #Iqonic Design
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-32"
              data-type="text"
              data-color="#253b5c"
              data-rsp_ch="on"
              data-xy="x:r;xo:-50px;y:b;yo:86px;"
              data-text="w:normal;"
              data-btrans="rZ:-90;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:3500;sp:1000;sR:3500;"
              data-frame_999="o:0;st:w;sR:4500;"
              style={{
                zIndex: 32,
                fontFamily: "Roboto",
                textTransform: "capitalize",
              }}
            >
              #Design Inspiration
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-33"
              data-type="text"
              data-color="#ffffff"
              data-rsp_ch="on"
              data-xy="x:1465px;y:554px;"
              data-text="w:normal;s:30;l:30;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2800;sp:1000;"
              data-frame_999="o:0;st:w;sR:5900;"
              style={{ zIndex: 25, fontFamily: "Roboto" }}
            >
              <span className="timer" data-to="49" data-speed="5000">
                49
              </span>
            </rs-layer>
            <rs-layer
              id="slider-6-slide-6-layer-34"
              data-type="text"
              data-color="#ffffff"
              data-rsp_ch="on"
              data-xy="x:694px;y:445px;"
              data-text="w:normal;s:30;l:30;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:2700;sp:1000;sR:2700;"
              data-frame_999="o:0;st:w;sR:5300;"
              style={{ zIndex: 23, fontFamily: "Roboto" }}
            >
              <span className="timer" data-to="59" data-speed="5000">
                59
              </span>
            </rs-layer>
          </rs-slide>
        </RevSlider>
      </div>
    </>
  );
};

export default Index;
