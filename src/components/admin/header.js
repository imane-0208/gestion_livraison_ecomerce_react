

const Header = () => {

    return (
        <div className="vertical-menu">

<div data-simplebar className="h-100">

{/* <!--- Sidemenu --> */}
<div id="sidebar-menu">
{/* <!-- Left Menu Start --> */}
<ul className="metismenu list-unstyled" id="side-menu">
    <li className="menu-title" data-key="t-menu">Menu</li>

    <li>
        <a href="/generaladmin">
            <i className="bx bx-home-circle"></i>
            <span data-key="t-dashboard active">Dashboard</span>
        </a>
    </li>
    <li>
        <a href="/usercenter">
            <i className="bx bx-user"></i>
            <span data-key="t-dashboard ">Managers</span>
        </a>
    </li>
    {/* <li>
        <a href="/center">
            <i className="bx bx-lock-alt"></i>
            <span data-key="t-dashboard ">Centre</span>
        </a>
    </li> */}

</ul>

</div>
{/* <!-- Sidebar --> */}
</div>
</div>
    )
}

export default Header;