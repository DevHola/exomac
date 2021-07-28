<template>
    <div class="section-padding-t90-b100">
        <div class="container ">
            <!-- Section Title Start -->
            <SectionTitle title="HR consulting services possible with every consultation!" sub-title="" add-class-name="mb-30" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" >
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Our Locations</h4>
                            <span class="info-text"> Suite 402, The King’s Plaza, Jahi. Opposite NAF Conference Centre</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" >
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Give Us A Call</h4>
                            <span class="info-text">+234816-079-3010</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" >
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Help Desk</h4>
                            <span class="info-text">
                                <a href="mailto:info@cocreaconsults.com">info@cocreaconsults.com</a>
                                <br>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            

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
