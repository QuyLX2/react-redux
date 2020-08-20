import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import OverView from '../src/views/components/introHomePageCom/OverView';


const routes = [
    {
        path: "/overview",
        name: "Overview",
        icon: <UserOutlined />,
        component: <OverView/>,
      },
    {
        path: '',
        name: 'Lecture 1',
        icon: <UserOutlined />,
        children: [
            {
                path: '/lecture-1/lesson-1',
                name: 'Lesson 1',
                component: <div>Content</div>,
            },
            {
                path: '/lecture-1/lesson-2',
                name: 'Lesson 2',
                component: <div>Content</div>
            },
            {
                path: '/lecture-1/lesson-3',
                name: 'Lesson 3',
                component: <div>Content</div>
            },
            {
                path: '/lecture-1/lesson-4',
                name: 'Lesson 4',
                component: <div>Content</div>
            },
            {
                path: '/lecture-1/lesson-5',
                name: 'Lesson 5',
                component: <div>Content</div>
            },
        ]
    },
    {
        path: "/lecture-2",
        name: 'Lecture 2',
        icon: <UserOutlined />,
        children: [
            {
                path: '/lecture-2/lesson-1',
                name: 'Lesson 1',
                component: <div>Content</div>
            },
            {
                path: '/lecture-2/lesson-2',
                name: 'Lesson 2',
                component: <div>Content</div>
            },
            {
                path: '/lecture-2/lesson-3',
                name: 'Lesson 3',
                component: <div>Content</div>
            },
            {
                path: '/lecture-2/lesson-4',
                name: 'Lesson 4',
                component: <div>Content</div>
            },
            {
                path: '/lecture-2/lesson-5',
                name: 'Lesson 5',
                component: <div>Content</div>
            },
        ]
    },
    {
        path: '/lecture-3',
        name: "Lecture 3",
        icon: <UserOutlined />,
        children: [
            {
                path: '/lecture-3/lesson-1',
                name: 'Lesson 1',
                component: <div>Content</div>
            },
            {
                path: '/lecture-3/lesson-2',
                name: 'Lesson 2',
                component: <div>Content</div>
            },
            {
                path: '/lecture-3/lesson-3',
                name: 'Lesson 3',
                component: <div>Content</div>
            },
            {
                path: '/lecture-3/lesson-4',
                name: 'Lesson 4',
                component: <div>Content</div>
            },
            {
                path: '/lecture-3/lesson-5',
                name: 'Lesson 5',
                component: <div>Content</div>
            },
        ]
    },
    {
        path: '/final-exam',
        name: "Final Exam",
        icon: <UserOutlined />,
        children: [
            {
                path: "/final-exam/exam-1",
                name: "Exam 1",
                component: <div>Content</div>
            },
            {
                path: "/final-exam/exam-2",
                name: "Exam 2",
                component: <div>Content</div>
            },
            {
                path: "/final-exam/exam-3",
                name: "Exam 3",
                component: <div> Content </div>
            },
            {
                path: "/final-exam/exam-4",
                name: "Exam 4",
                component: <div>Content</div>
            },
            {
                path: "/final-exam/exam-5",
                name: "Exam 5",
                component: <div>Content</div>
            },
        ]
    }

]


export default routes;