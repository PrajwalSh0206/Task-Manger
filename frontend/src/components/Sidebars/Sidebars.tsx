import './Sidebar.scss';
import '../../scss/common.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
    const [activeLink, setActiveLink] = useState<string>("home");

    const handleLinkClick = (linkName:string) => {
        // Set the active link based on link clicked
        setActiveLink(linkName);
    };

    return (
        <div className='sidebar w-2/12 '>
            <div className='user'>
                <img src="https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=Prajwal_Shetty" alt="avatar" />
                <p>
                    Prajwal Shetty
                </p>
            </div>
            <div className='links'>
                <Link className={activeLink === "home" ? "active" : ''} onClick={() => handleLinkClick("home")} to="/">
                    <svg width="24px" stroke-width="1.5" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M9 6L20 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 18L20 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>
                        All Tasks
                    </p>
                </Link>
                <Link className={activeLink === "important" ? "active" : ''} onClick={() => handleLinkClick("important")} to="/important">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M8.5 4H6C4.89543 4 4 4.89543 4 6V20C4 21.1046 4.89543 22 6 22H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.5 4H18C19.1046 4 20 4.89543 20 6V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 6.4V4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9.00422 3.77604 9.05152 3.50398C9.19968 2.65171 9.77399 1 12 1C14.226 1 14.8003 2.65171 14.9485 3.50398C14.9958 3.77604 15.2239 4 15.5 4C15.7761 4 16 4.22386 16 4.5V6.4C16 6.73137 15.7314 7 15.4 7H8.6C8.26863 7 8 6.73137 8 6.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.5 20.5L17.5 22.5L22.5 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>
                        Important
                    </p>
                </Link>
                <Link className={activeLink === "completed" ? "active" : ''} onClick={() => handleLinkClick("completed")} to="/completed">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z" fill="currentColor"></path></svg>
                    <p>
                        Completed
                    </p>
                </Link>
                <Link className={activeLink === "now" ? "active" : ''} onClick={() => handleLinkClick("now")} to="/now">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25ZM12.5675 17.5008C12.8446 17.1929 12.8196 16.7187 12.5117 16.4416C12.2038 16.1645 11.7296 16.1894 11.4525 16.4973L11.4425 16.5084C11.1654 16.8163 11.1904 17.2905 11.4983 17.5676C11.8062 17.8447 12.2804 17.8197 12.5575 17.5119L12.5675 17.5008Z" fill="currentColor"></path></svg>
                    <p>
                        Do It Now
                    </p>
                </Link>
            </div>
            <button className='signout'>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p>Signout</p>
            </button>
        </div>
    );
}

export default Sidebar;
