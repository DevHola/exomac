<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/slider-3.jpeg" />

        <ServiceWrapper />
       <div class="m-5 text-center row">
         <div v-for="(service,index) in services" :key="index" class="col"> 
            <img class="img-fluid rounded-circle mb-4 px-4" :src="service.image" height="250" width="250"/>           
             <h5><nuxt-link :to="'/services/'+service.url" type="button" class="">{{service.title}}</nuxt-link></h5>
             </div>
         
         </div>
        <hr>
        <FunfactWithTitle />

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
            ServiceWrapper: () => import('@/components/ServiceWrapper'),
            FunfactWithTitle: () => import('@/components/FunfactWithTitle'),
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
                        text: 'Service',
                        active: true
                    }
                ],
                services:[
                          {
                              id:1,
                              url:"Recruitment-and-Selection",
                              title:"Recruitment and Selection",
                              desc:[
                                  {
                                      id:1,
                                      desc:"This solution ensures that we adopt the most effective measures to ensure we attract, shortlist, select and present to our clients the most suitable candidates for all required roles."
                                  }
                              ],
                              image:"/images/bg/recruitment-icon-30165.png",
                              Selection:[
                                  {
                                      id:1,
                                      title:"Talent acquisition"
                                  },
                                   {
                                      id:2,
                                      title:"Talent retention"
                                  }
                              ]
                          },
                          {
                              id:2,
                              url:"HRAdvisory-Services",
                              title:"HR Advisory Services",
                              desc:[
                                  {
                                      id:1,
                                      desc:"HR Transformation: This service offers a robust service that focuses on building and developing HR systems, practices and processes that are fit for purpose and are more perfectly aligned to the overall strategic objectives of the organisation."
                                  },
                                  {
                                      id:2,
                                      desc:"Talent Management: This solution focuses on equipping the workforce with efficient tools to ensure optimal productivity. Our approach ensures we tap and develop the potential of your employees from beginning to the end of their employment life cycle"
                                  }
                              ],
                              image:"/images/bg/pngkey.com-human-resources-png-4316305.png",
                              Selection:[
                                  {
                                      id:1,
                                      title:"HR Analytics & Diagnostics"
                                  },
                                   {
                                      id:2,
                                      title:"HR Systems &Technologies"
                                  },
                                  {
                                      id:3,
                                      title:"Change Management &Communication"
                                  },
                                   {
                                      id:4,
                                      title:"Human Resources Strategy Formulation"
                                  },
                                  {
                                      id:5,
                                      title:"Organisation Design & Development"
                                  },
                                   {
                                      id:6,
                                      title:"Workforce Strategy & Planning"
                                  },
                                  {
                                      id:7,
                                      title:"Performance Management"
                                  },
                                   {
                                      id:8,
                                      title:"Career Progression & Management"
                                  },
                                  {
                                      id:9,
                                      title:"Talent Profiling,Job Analysis & Evaluation"
                                  },
                                   {
                                      id:10,
                                      title:"Succession Planning and Talent Mapping"
                                  }
                              ]
                          },
                          {
                              id:3,
                              url:"Outsourcing",
                              title:"Outsourcing",
                              desc:[
                                  {
                                      id:1,
                                      desc:"Outsourcing solutions is structured such that our clients time resource is freed up to allow for a focus on strategic operations. It is an all-encompassing solution focused on the following:"
                                  }
                              ],
                              image:"/images/bg/pngkey.com-outsourcing-png-3633418.png",
                              Selection:[{
                                      id:1,
                                      title:"People Outsourcing "
                                  },
                                  {
                                      id:2,
                                      title:"Project Outsourcing" 
                                  },
                                  {
                                      id:3,
                                      title:"Process Outsourcing "
                                  }
                                  ]
                          },
                          {
                              id:4,
                              url:"Strategy-and-Learning",
                              title:"Strategy and Learning",
                              desc:[{
                                  id:1,
                                  desc:"This service aims at identifying and providing the right training opportunities to employees to improve individual performance by proper development of skills and knowledge."
                              }],
                              image:"/images/bg/pngkey.com-consulting-icon-png-3828086.png",
                              Selection:[
                                  {
                                      id:1,
                                      title:"Personal Development "
                                  },
                                  {
                                      id:2,
                                      title:"Strategic Leadership Development "
                                  },
                                  {
                                      id:1,
                                      title:"Learning and Development "
                                  }
                              ]
                          }
                      ]
            }
        },
        head() {
            return {
                title: 'Service'
            }
        },
    };
</script>


