<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/breadcrumb-bg-three.jpg" />

        <ServiceWrapper />
         <div class="text-center row">
         <div v-for="(service,index) in services" :key="index" class="col-3 p-4 "> 
            <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />           
             <h5><nuxt-link :to="'/services/'+service.url" type="button" class="">{{service.title}}</nuxt-link></h5>
             </div>
         
         </div>


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
                ]
            }
        },
        asyncData(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                  resolve({
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
                              image:"",
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
                              title:"HRAdvisory Services",
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
                              image:"",
                              Selection:[
                                  {
                                      id:1,
                                      title:"HRAnalytics & Diagnostics"
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
                              image:"",
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
                              image:"",
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
                  })
                },1500)
            })
        },
        head() {
            return {
                title: 'Service'
            }
        },
    };
</script>


