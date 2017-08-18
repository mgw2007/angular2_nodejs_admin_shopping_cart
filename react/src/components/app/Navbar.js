import React from "react";
import {Link} from 'react-router'
let urls = {
    dashboard: {
        url: 'dashboard',
        title: 'Dashboard',
        className: 'fa fa-th',
        treeview: false
    },
    orders: {
        url: 'orders',
        title: 'Orders',
        className: 'fa fa-edit',
        treeview: false
    },
    products: {
        url: '',
        title: 'Products',
        treeview: true,
        className: 'fa fa-dashboard',
        urls: {
            products: {
                url: 'products',
                title: 'List',
                className: 'fa fa-circle-o',
            },
            'products/add': {
                url: 'products/add',
                title: 'Add',
                className: 'fa fa-plus-circle',
            }
        },
    },
    admins: {
        url: '',
        title: 'Admins',
        treeview: true,
        className: 'fa fa-dashboard',
        urls: {
            admins: {
                url: 'admins',
                title: 'List',
                className: 'fa fa-circle-o',
            },
            'admins/add': {
                url: 'admins/add',
                title: 'Add',
                className: 'fa fa-plus-circle',
            }
        },
    },

}
const BootstrapNavLink = (props) => {
    let className = "";

    if (props.router.getCurrentLocation().pathname == "/" + props.url) {
        className = " active";
    }
    return (
        <li className={className}>
            <Link to={"/" + props.url}>
                <i className={props.className}></i>
                <span>{props.title}</span>
            </Link>
        </li>
    )
}
const BootstrapNavTree = (props) => {
    let lis = [];
    let className = "treeview ";
    for (var i in props.urls) {
        lis.push(<BootstrapNavLink {...props.urls[i]} key={i} router={props.router}/>)
        if (props.router.getCurrentLocation().pathname == "/" + props.urls[i].url) {
            className += "active";
        }

    }
    return (
        <li className={className}>
            <a href="#">
                <i className={props.className}></i>
                <span>{props.title}</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul className="treeview-menu">
                {lis}
            </ul>
        </li>
    )
}

export const Navbar = (props) => {
    let lis = [];
    for (var i in urls) {
        if (urls[i].treeview) {
            lis.push(<BootstrapNavTree {...urls[i]} key={i} router={props.router}/>)
        }
        else {
            lis.push(<BootstrapNavLink {...urls[i]} key={i} router={props.router}/>)
        }
    }
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu">
                    {lis}
                </ul>
            </section>
        </aside>
    )
}
const Navbar1 = (props) => {
    <aside className="main-sidebar">
        <section className="sidebar">
            <ul className="sidebar-menu">
                <li>
                    {JSON.stringify(props)}
                </li>
                <li>
                    <Link to="/dashboard">
                        <i className="fa fa-th"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link to="/orders">
                        <i className="fa fa-edit"></i>
                        <span>Orders</span>
                    </Link>
                </li>

                <li className="treeview">
                    <a href="#">
                        <i className="fa fa-dashboard"></i> <span>
                            Products</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link to="/products">
                                <i className="fa fa-circle-o"></i>
                                List
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/add">
                                <i className="fa fa-plus-circle"></i>
                                Add
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="treeview">
                    <a href="#">
                        <i className="fa fa-dashboard"></i> <span>
                            Admins</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <Link to="/admins">
                                <i className="fa fa-circle-o"></i>
                                List
                            </Link>
                        </li>
                        <li>
                            <Link to="/admins/add">
                                <i className="fa fa-plus-circle"></i>
                                Add
                            </Link>
                        </li>
                    </ul >
                </li >
            </ul >
        </section >
    </aside >
}
