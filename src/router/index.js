import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Search from '@/components/Search'
import Theater from '@/components/Theater'
import Top from '@/components/Top'
import Swipe from '@/components/Swipe'
import Coming from '@/components/Coming'
import Usbox from '@/components/Usbox'
import Details from "@/components/Details"
import Details01 from "@/components/Details01"
import Introduce from "@/components/Introduce"
import Starman from "@/components/Starman"
import More from "@/components/More"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: { 
      	"Header" : Header,
      	"Theater" : Theater,
      	"Top":Top,
      	"Swipe":Swipe,
      	"Coming":Coming,
      	"Usbox":Usbox,
      	"Details":Details
      }
    },
    {
    	path:'/Search',
    	name:"Search",
    	component:Search
    },
    {
      path:'/Details/:id',
      name:"Details",
      component:Details,
      children:[
        {
          path:"",
          components:{Header,Details01,Introduce,Starman}
        }

      ]
    },
    {
    	path:'/More/:woxiang',
    	name:"More",
    	component:More
    }
  ]
})
