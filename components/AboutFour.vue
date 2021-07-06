<template>

    <div class="">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-3.jpg" alt="image">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-4.jpg" alt="image">
                        </div>
                        
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-content-area about-four">
                        <div class="section-title-two">
                            <span class="sub-title">What we do</span>
                            <h3 class="title">We improve HR and business operations .</h3>
                        </div>
                        <p>Cocre-a offers bespoke solutions that improve HR and business operations across various sectors; internationally and
locally. We examine companies and issues independently; and device a ‘flex-to-fit’ approach to handle all our clients request.Our solutions are tailored to meet the specific needs of our clients; in this regard, we offer a wide array of bespoke
solutions that meet and surpass the expectations of our clients.</p>
                    
                    </div>
              
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation')
        },
    };
</script>