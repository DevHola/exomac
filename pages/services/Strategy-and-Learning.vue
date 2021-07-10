<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/breadcrumb-bg1.jpg" />

        <!-- Start Work Details -->
        <div class="section-padding">
            <div class="container">
                <!-- Start Thumbnail -->
                 <div class="row">
                    <div class="col">
                        <div class="custom-column-thumbnail" data-aos="fade-up">
                            <img class="img-fluid" src="/images/project/work-details-1.jpg"  alt="Agency">
                        </div>
                    </div>
                     <div class="col">
                        <div class="custom-column-thumbnail" data-aos="fade-up">
                            <img class="img-fluid" src="/images/project/work-details-1.jpg"  alt="Agency">
                        </div>
                    </div>
                </div>


                <!-- Start Digital Marketion Area -->
                <div class="row mt-60">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="digital-marketing" data-aos="fade-up">
                            <h3 class="heading heading-h3">Strategy and Learning</h3>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-12 offset-lg-1">
                        <div class="digital-marketing" data-aos="fade-up">
                            <div class="inner">
                                <p>This service aims at identifying and providing the right training opportunities to employees to improve individual performance by proper development of skills and knowledge.</p>
                                  <b>Solutions we offer:</b>
                                  <li>Personal Development</li>
                                  <li>Strategic Leadership Development</li>
                                  <li>Learning and Development</li>
                                  
                                  
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Digital Marketion Area -->
                 <hr>
                <!-- Start Gallery Area -->
               
                <!-- End Gallery Area -->
            </div>
        </div>
        <!-- Start Work Details -->
          <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <a class="btn btn-lg btn-primary" href="#!">Contact us</a>
                </div>
            </section>
        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Service Details',
                        active: true
                    }
                ],
                
            }
        },
       

        head() {
            return {
                title: 'Service Details'
            }
        },
    };
</script>


