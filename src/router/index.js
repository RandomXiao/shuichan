import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '农场信息' }
      }
    ]
  },

  {
    path: '/pond',
    component: Layout,
    redirect: '/pond/pond',
    name: 'Ponds',
    meta: { title: '池塘管理' },
    children: [
      {
        path: 'pond',
        name: 'Pond',
        component: () => import('@/views/pond/pond/index'),
        meta: { title: '池塘管理' }
      },
      {
        path: 'water',
        name: 'Water',
        component: () => import('@/views/pond/water/index'),
        meta: { title: '水池管理' }
      }
    ]
  },

  {
    path: '/farm',
    component: Layout,
    name: 'Farm',
    meta: { title: '养殖管理' },
    children: [
      {
        path: 'program',
        name: 'Program',
        component: () => import('@/views/farm/program/index'),
        meta: { title: '养殖方案' }
      },
      {
        path: 'plan',
        name: 'Plan',
        component: () => import('@/views/farm/plan/index'),
        meta: { title: '养殖计划' }
      }
    ]
  },

  {
    path: '/produce',
    component: Layout,
    redirect: '/produce/plan',
    name: 'Produce',
    meta: { title: '生产管理' },
    children: [
      {
        path: 'plan',
        name: 'PPlan',
        component: () => import('@/views/produce/plan/index'),
        meta: { title: '生产计划' }
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import('@/views/produce/record/index'),
        meta: { title: '生产记录' }
      }
    ]
  },

  {
    path: '/cost',
    component: Layout,
    redirect: '/cost',
    name: 'Cost',
    component: () => import('@/views/cost/index'),
    meta: { title: '成本管理' }
  },

  {
    path: '/house',
    component: Layout,
    redirect: '/house/warn',
    name: 'House',
    meta: { title: '农资仓库' },
    children: [
      {
        path: 'warn',
        name: 'Warn',
        component: () => import('@/views/house/warn/index'),
        meta: { title: '农资预警' }
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: () => import('@/views/house/inventory/index'),
        meta: { title: '库存盘点' }
      },
      {
        path: 'stock',
        name: 'Stock',
        component: () => import('@/views/house/stock/index'),
        meta: { title: '农资库存' }
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import('@/views/house/detail/index'),
        meta: { title: '库存出入库明细' }
      }
    ]
  },

  {
    path: '/invest',
    component: Layout,
    redirect: '/invest/input',
    name: 'Invest',
    meta: { title: '投入品管理' },
    children: [
      {
        path: 'input',
        name: 'Input',
        component: () => import('@/views/invest/input/index'),
        meta: { title: '投入品' }
      },
      {
        path: 'dealer',
        name: 'Dealer',
        component: () => import('@/views/invest/dealer/index'),
        meta: { title: '经销商' }
      },
      {
        path: 'manufacturer',
        name: 'Manufacturer',
        component: () => import('@/views/invest/manufacturer/index'),
        meta: { title: '生产商' }
      }
    ]
  },

  {
    path: '/role',
    component: Layout,
    redirect: '/role/role',
    name: 'Roles',
    meta: { title: '人员管理' },
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/role/role/index'),
        meta: { title: '角色管理' }
      },
      {
        path: 'user',
        name: 'Users',
        component: () => import('@/views/role/user/index'),
        meta: { title: '用户管理' }
      }
    ]
  },

  {
    path: '/os',
    component: Layout,
    redirect: '/os/mana',
    name: 'Os',
    meta: { title: '系统设置' },
    children: [
      {
        path: 'mana',
        name: 'Mana',
        component: () => import('@/views/os/mana/index'),
        meta: { title: '字典管理' }
      },
      {
        path: 'recycle',
        name: 'Recycle',
        component: () => import('@/views/os/recycle/index'),
        meta: { title: '字典回收' }
      }
    ]
  },

  // {
  //   path: "/form",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Form",
  //       component: () => import("@/views/form/index"),
  //       meta: { title: "Form", icon: "form" }
  //     }
  //   ]
  // },

  // {
  //   path: "/nested",
  //   component: Layout,
  //   redirect: "/nested/menu1",
  //   name: "Nested",
  //   meta: {
  //     title: "Nested",
  //     icon: "nested"
  //   },
  //   children: [
  //     {
  //       path: "menu1",
  //       component: () => import("@/views/nested/menu1/index"), // Parent router-view
  //       name: "Menu1",
  //       meta: { title: "Menu1" },
  //       children: [
  //         {
  //           path: "menu1-1",
  //           component: () => import("@/views/nested/menu1/menu1-1"),
  //           name: "Menu1-1",
  //           meta: { title: "Menu1-1" }
  //         },
  //         {
  //           path: "menu1-2",
  //           component: () => import("@/views/nested/menu1/menu1-2"),
  //           name: "Menu1-2",
  //           meta: { title: "Menu1-2" },
  //           children: [
  //             {
  //               path: "menu1-2-1",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-1"),
  //               name: "Menu1-2-1",
  //               meta: { title: "Menu1-2-1" }
  //             },
  //             {
  //               path: "menu1-2-2",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-2"),
  //               name: "Menu1-2-2",
  //               meta: { title: "Menu1-2-2" }
  //             }
  //           ]
  //         },
  //         {
  //           path: "menu1-3",
  //           component: () => import("@/views/nested/menu1/menu1-3"),
  //           name: "Menu1-3",
  //           meta: { title: "Menu1-3" }
  //         }
  //       ]
  //     },
  //     {
  //       path: "menu2",
  //       component: () => import("@/views/nested/menu2/index"),
  //       name: "Menu2",
  //       meta: { title: "menu2" }
  //     }
  //   ]
  // },

  // {
  //   path: "external-link",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "https://panjiachen.github.io/vue-element-admin-site/#/",
  //       meta: { title: "External Link", icon: "link" }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
