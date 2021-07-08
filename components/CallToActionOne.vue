<template>
    <div class="section-padding-t90-b100">
        <div class="container shape-animate">
            <!-- Section Title Start -->
            <SectionTitle title="HR consulting services possible with every consultation!" sub-title="" add-class-name="mb-30" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Our Locations</h4>
                            <span class="info-text"> <br> Nigeria</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Give Us A Call</h4>
                            <span class="info-text"> 0123456789 <br> 0123456789</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Help Desk</h4>
                            <span class="info-text">
                                <a href="mailto:info@cocreaconsults.com">info@cocreaconsults.com</a>
                                <a href="">cocreaconsults.com/contact</a>
                                <br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <shape-with-animation add-class-name="shape-1" data-depth="4" img-src="/images/shape-animation/video-shape-1.png" />

        </div>
    </div>
</template>

<script>

    export default {
        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
            ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
        },
    };
</script>
