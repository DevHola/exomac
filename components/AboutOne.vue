<template>
    <div class="section-padding-t90 section-padding-bottom-200">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-left" data-aos="fade-up">
                <h2 class="title">Effective Human Resources and Business Management is Key to unlocking maximum productivity.</h2>
            </div>
            
            <!-- Section Title End -->

            <!-- About Wrapper Start -->
            <div class="row">
                <!-- About Image Area Start -->
                <div class="col-xl-7 col-lg-6" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/about/agency_about_1.jpg" alt="images">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/about/agency_about_2.jpg" alt="images">
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <!-- About Image Area Start -->

                <!-- About Start -->
                <div class="col-xl-5 col-lg-6" data-aos="fade-up">
                    <div class="about-content-area about-one">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Every day brings new challenges</span>
                            <h3 class="title">Cocre-a bridges the gap of need for employers and jobseekers.</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <p>We create processes that help businesses improve efficiency, make profit ,save cost by engaging the right talents, and building an ideal organization that nurtures productivity, innovation and collaboration.</p>
                        <n-link to="/about" class="btn btn-primary btn-hover-secondary mt-4">About Us</n-link>
                    </div>
                </div>
                <!-- About Start -->
            </div>
            <!-- About Wrapper End -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>