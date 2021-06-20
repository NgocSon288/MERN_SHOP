import React, {useState} from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './ClientHome.css'
export default function ClientHome() {
  const items = [
    {
      src: `http://localhost:3000/images/home/slide-1.jpg`,
      width: window.innerWidth,
      altText: 'Slide 1'
    },
    {
      src: `http://localhost:3000/images/home/slide-2.jpg`,
      altText: 'Slide 2'
    },
    {
      src: `http://localhost:3000/images/home/slide-3.jpg`,
      altText: 'Slide 3'
    },
    {
      src: `http://localhost:3000/images/home/slide-4.jpg`,
      altText: 'Slide 4'
    },
    {
      src: `http://localhost:3000/images/home/slide-5.jpg`,
      altText: 'Slide 5'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    console.log(items.length)
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width={window.innerWidth} height='700px'/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  
  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={120000}
        stopOnHover={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        transitionTime={10}
        useKeyboardArrows={true}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <div className="sp-dien-thoai">
        <div className="container">
          <p className="title-dien-thoai">
            SẢN PHẨM NỔI BẬT ĐIỆN THOẠI
          </p>
          <div className="row show-san-pham">
            <div className="col-md-5 slideanim my-left-1">
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-11.jpg" alt="Sản phẩm điện thoại 1" className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại iPhone 11 Pro Max</a>
              </h4>
              <h5>34.990.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
            <div className="col-md-5 offset-md-2 slideanim my-left-2" >
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-21.jpg" alt="Sản phẩm điện thoại 2"  className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại Samsung Galaxy Note 10+</a>
              </h4>
              <h5>16.490.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
            <div className="col-md-5 slideanim2 my-left-1 mt-4">
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-31.jpg" alt="Sản phẩm điện thoại 3"  className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại OPPO Reno4</a>
              </h4>
              <h5>8.490.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
            <div className="col-md-5 offset-md-2 slideanim1 my-left-2 mt-4">
              <div className="grid">
                <figure className="effect">
                  <img src="Resources/myImages/slide-41.jpg" alt="Sản phẩm điện thoại 4" className="w-100"/>
                  <figcaption></figcaption>
                </figure>
              </div>
              <h4>
                <a href="chitietsanpham.html" className="ten">Điện thoại Realme 7</a>
              </h4>
              <h5>6.990.000<span className="badge vnd">₫</span></h5>
              <h6><a href="chitietsanpham.html" className="xem-them">Xem thêm</a></h6>
            </div>
          </div>
          <div className="clearfix"></div>

        </div>
      </div>
    </div>
  )
}
