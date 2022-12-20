import { lazy } from 'react'
const Discover = lazy(() => import('../pages/discover'))
const Mine = lazy(() => import('../pages/mine'))
const NotFound = lazy(() => import('../pages/NotFound'))
export default [
    {
        path: '/',
        meta: {
            title: '发现音乐',
            isLogin: true
        },
        component: Discover
    },
    {
        path: '/mine',
        meta: {
            title: '我的'
        },
        component: Mine
    },
    // {
    //     path: '/demo',
    //     component: lazy(() => import('@/pages/demo')),
    //     children: [
    //         {
    //             path: '',
    //             redirect: '/demo/route-demo',
    //         },
    //         {
    //             path: '/demo/route-demo/*',
    //             meta: {
    //                 title: 'react-route',
    //                 isLogin: true
    //             },
    //             component: RouteDemo,
    //         },
    //         {
    //             path: '/demo/redux-demo',
    //             meta: {
    //                 title: 'react-redux',
    //                 isLogin: true
    //             },
    //             component: ReduxDemo
    //         },
    //         {
    //             path: '/demo/context-demo',
    //             meta: {
    //                 title: 'react-context',
    //                 isLogin: true
    //             },
    //             component: ContextDemo
    //         }
    //     ]
    // },
    {
        path: '*',
        meta: {
            title: '404'
        },
        component: NotFound
    }
]