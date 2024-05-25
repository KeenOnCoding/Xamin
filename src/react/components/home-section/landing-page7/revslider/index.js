import React from "react";
import { RevSlider } from "../../../xamin";
import { initRevSlider7 } from "../../../../config/plugins";
import Link from "next/link";
import Image from "next/image";

import $ from "jquery";

import img from "../../../../public/assets/revslider/assets_slider_demo7/transparent.png";
import img1 from "../../../../public/assets/revslider/assets_slider_demo7/demo7-rev-bg.png";
import img2 from "../../../../public/assets/revslider/assets_slider_demo7/demo7-rev-06.png";
import img3 from "../../../../public/assets/revslider/assets_slider_demo7/demo7-rev-05.png";
import img4 from "../../../../public/assets/revslider/assets_slider_demo7/demo7-rev-07.png";
import img5 from "../../../../public/assets/revslider/assets_slider_demo7/01.png";

const Index = () => {
  React.useEffect(() => {
    if (!tpj("#rev_slider_7_1").hasClass("revslider-initialised")) {
      $("#rev_slider_7_1")
        .show()
        .revolution({
          sliderType: "standard",
          sliderLayout: "fullwidth",
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1400, 1024, 778, 480],
          gridheight: [800, 650, 650, 500],
          minHeight: "",
          autoHeight: true,
          lazyType: "smart",
          spinner: "spinner0",
          editorheight: [800, 650, 650, 500],
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
        <RevSlider revId={"rev_slider_7_1"}>
          <rs-slide
            data-key="rs-4"
            data-title="Slide"
            data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
          >
            <Image src={img} className="rev-slidebg" data-no-retina />
            <rs-bgvideo
              data-video="w:100%;h:100%;nse:false;l:true;ptimer:true;"
              data-mp4="./assets/revslider/assets_slider_demo7/demo7.mp4"
            ></rs-bgvideo>
            <rs-layer
              id="slider-4-slide-4-layer-1"
              data-type="image"
              data-rsp_ch="on"
              data-xy="xo:0,2px,1px,0;yo:0,-16px,-16px,-9px;"
              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
              data-dim="w:1142px,835px,835px,639px;h:910px,665px,666px,509px;"
              data-basealign="slide"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;sp:1000;"
              data-frame_999="o:0;st:w;sR:8000;"
              style={{ zIndex: 8, fontFamily: "Roboto" }}
            >
              <Image src={img1} width="1198" height="955" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-2"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:223px,93px,70px,78px;yo:168px,169px,128px,166px;"
              data-text="w:normal;s:120,87,66,40;l:160,117,88,54;fw:900;"
              data-frame_1="e:Power4.easeInOut;st:600;sp:1200;sR:600;"
              data-frame_1_sfx="se:blocktoright;"
              data-frame_999="o:0;st:w;sR:7200;"
              style={{ zIndex: 9, fontFamily: "Lato" }}
            >
              Sentiment
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-3"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:223px,100px,75px,77px;yo:307px,286px,217px,216px;"
              data-text="w:normal;s:70,51,38,23;l:90,65,49,30;fw:900;"
              data-frame_1="e:Power4.easeInOut;st:910;sp:1000;sR:910;"
              data-frame_1_sfx="se:blocktoright;"
              data-frame_999="o:0;st:w;sR:7090;"
              style={{ zIndex: 10, fontFamily: "Lato" }}
            >
              Analytics
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-8"
              data-type="image"
              data-rsp_ch="on"
              data-xy="xo:245px,199px,151px,106px;yo:556px,465px,353px,328px;"
              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
              data-dim="w:101px,73px,55px,33px;h:100px,73px,55px,33px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:4500;sp:1000;sR:4500;"
              data-frame_999="o:0;st:w;sR:3500;"
              style={{ zIndex: 17, fontFamily: "Roboto" }}
            >
              <Image src={img2} width="133" height="132" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-9"
              data-type="image"
              data-rsp_ch="on"
              data-xy="xo:243px,237px,180px,125px;yo:548px,472px,358px,323px;"
              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
              data-dim="w:396px,289px,219px,216px;h:104px,76px,57px,57px;"
              data-frame_0="x:-50,-36,-27,-16;"
              data-frame_1="st:1200;sp:1000;sR:1200;"
              data-frame_999="o:0;st:w;sR:6800;"
              style={{ zIndex: 11, fontFamily: "Roboto" }}
            >
              <Image src={img3} width="453" height="119" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-10"
              data-type="image"
              data-rsp_ch="on"
              data-xy="xo:244px,210px,159px,111px;yo:553px,464px,352px,331px;"
              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
              data-dim="w:101px,73px,55px,37px;h:100px,73px,55px,37px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:1200;sp:1000;sR:1200;"
              data-frame_999="o:0;st:4500;sR:2300;"
              style={{ zIndex: 16, fontFamily: "Roboto" }}
            >
              <Image src={img4} width="127" height="126" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-13"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:472px,373px,283px,249px;yo:553px,494px,375px,339px;"
              data-text="w:normal;s:40,29,22,13;l:46,33,25,15;fw:900;"
              data-frame_1="st:1600;sR:1600;"
              data-frame_999="o:0;st:4500;sp:360;sR:2600;"
              style={{
                zIndex: 18,
                fontFamily: "Lato",
                textTransform: "uppercase",
              }}
            >
              40%
              <br />
              Mad
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-14"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:473px,436px,331px,247px;yo:555px,488px,370px,339px;"
              data-text="w:normal;s:40,29,22,13;l:46,33,25,15;fw:900;"
              data-dim="w:auto,auto,auto,66px;"
              data-frame_1="st:4500;sR:4500;"
              data-frame_999="o:0;st:w;sR:4200;"
              style={{
                zIndex: 19,
                fontFamily: "Lato",
                textTransform: "uppercase",
              }}
            >
              80%
              <br />
              Happy
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-15"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:-150px,-36px,-48px,-16px;yo:200px,154px,154px,134px;"
              data-text="w:normal;s:16,11,16,9;l:20,14,8,6;ls:4px,2px,1px,0px;fw:700;"
              data-btrans="rZ:-90;"
              data-frame_1="st:1600;sR:1600;"
              data-frame_999="o:0;st:w;sR:7100;"
              style={{ zIndex: 20, fontFamily: "Lato" }}
            >
              # Iqonic Design
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-17"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:-160px,-37px,-55px,-46px;y:b;yo:275px,313px,260px,173px;"
              data-text="w:normal;s:20,14,14,12;l:25,18,13,8;"
              data-btrans="rZ:-90;"
              data-frame_1="st:2100;sR:2100;"
              data-frame_999="o:0;st:w;sR:6600;"
              style={{ zIndex: 22, fontFamily: "Lato" }}
            >
              be ready to make your design
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-18"
              data-type="text"
              data-color="#263c5c"
              data-xy="xo:-150px,-34px,-33px,-33px;y:b;yo:230px,283px,220px,146px;"
              data-text="w:normal;s:24,17,14,14;l:25,18,13,8;fw:900;"
              data-rsp_o="off"
              data-rsp_bd="off"
              data-btrans="rZ:-90;"
              data-frame_1="st:2100;sR:2100;"
              data-frame_999="o:0;st:w;sR:6600;"
              style={{ zIndex: 21, fontFamily: "Lato" }}
            >
              Our Video Here
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-19"
              data-type="text"
              data-color="#263c5c"
              data-rsp_ch="on"
              data-xy="xo:0,19px,14px,8px;y:b;yo:10px,131px,99px,61px;"
              data-text="w:normal;s:20,14,10,6;l:55,40,30,18;a:center;"
              data-dim="w:75px,54px,41px,25px;h:75px,54px,41px,25px;"
              data-padding="t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;"
              data-border="bos:solid;boc:#4cd9eb;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;"
              data-frame_1="st:2500;sR:2500;"
              data-frame_999="o:0;st:w;sR:6200;"
              style={{
                zIndex: 23,
                backgroundColor: "#ffffff",
                fontFamily: "Lato",
              }}
            >
              <Link href="#" className="iq-video popup-youtube">
                <i className="fa fa-play"></i>
              </Link>
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-20"
              data-type="image"
              data-rsp_ch="on"
              data-xy="x:c;xo:-393px,90px,68px,59px;y:m;yo:210px,378px,287px,289px;"
              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
              data-dim="w:285px,208px,158px,97px;h:285px,208px,158px,97px;"
              data-frame_0="sX:0.8;sY:0.8;"
              data-frame_1="e:Power4.easeOut;st:1200;sp:1000;sR:1200;"
              data-frame_999="o:0;st:w;sR:6800;"
              data-loop_999="rZ:360;sp:50000;"
              style={{ zIndex: 15, fontFamily: "Roboto" }}
            >
              <Image src={img5} width="285" height="285" data-no-retina />
            </rs-layer>
            <rs-layer
              id="slider-4-slide-4-layer-21"
              data-type="shape"
              data-rsp_ch="on"
              data-xy="xo:-150px,-109px,-82px,-50px;y:b;yo:50px,36px,27px,16px;"
              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
              data-dim="w:150px,109px,82px,50px;h:1px;"
              data-frame_0="x:-50,-36,-27,-16;"
              data-frame_1="st:2500;sp:1000;sR:2500;"
              data-frame_999="o:0;st:w;sR:5500;"
              style={{
                zIndex: 24,
                backgroundColor: "rgba(76,217,235,0.5)",
                fontFamily: "Roboto",
              }}
            ></rs-layer>
          </rs-slide>
        </RevSlider>
      </div>
    </>
  );
};

export default Index;
